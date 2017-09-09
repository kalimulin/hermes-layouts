import {observable, computed} from 'mobx'
import moment from 'moment'


export class MaintenanceModeModalStore {
  constructor(api) {
    this.api = api;
  }


  _localStorageKey = 'maintenance_mode';
  _lastUpdatedKey = 'last_updated_maintenance';
  data = {
    maintenance_title: '',
    maintenance_reason: '',
    maintenance_picture: ''
  };
  @observable loading = false;
  @observable password = '';
  @observable invalidPasswordError = false;


  toggleLoading(flag) {
    console.info('toggleLoading', flag);
    this.loading = flag;
  }

  toggleInvalidPasswordError(flag) {
    console.info('toggleInvalidPasswordError', flag);
    this.invalidPasswordError = flag;
  }

  handlePasswordChanged(value) {
    console.info('handlePasswordChanged', value);
    this.password = value;
  }

  getMd5Checksum() {
    if(!this.data.maintenance_title) {
      this.toggleLoading(true);
      return this.api
        .getMd5Checksum()
        .then((data) => {
          window.TIME_NOW = moment.unix(data.server_time);
          this.data = data;
          return data;
        })
        .finally(() => {
          this.toggleLoading(false);
        });
    }
    return Promise.resolve(this.data);
  }

  validatePasswordRemote() {
    if(this.password) {
      this.toggleLoading(true);
      return this.api.validatePassword(this.password)
    }
    return Promise.reject(new Error('errorIncorrectPassword'));
  }

  saveMaintenance() {
    console.info('Saving maintenance', window.TIME_NOW);
    localStorage.setItem(this._lastUpdatedKey, window.TIME_NOW);
  }

  loadAddress() {
    const lastUpdated = new Date(localStorage.getItem(this._lastUpdatedKey));
    const diffInDays = (window.TIME_NOW - lastUpdated) / 86400000;
    console.info('Diff in days', diffInDays);
    return diffInDays > 1;
  }


  @computed get validatePassword() {
    if (this.isPasswordEmpty) {
      return null;
    }
    return this.invalidPasswordError ? 'error': 'success';
  }

  @computed get isPasswordEmpty() {
    return this.password.length === 0;
  }
}
