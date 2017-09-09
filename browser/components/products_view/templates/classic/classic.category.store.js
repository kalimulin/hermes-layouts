import {observable} from 'mobx'


export class ClassicCategoryStore {
  constructor(api) {
    this.api = api;
  }


  @observable loading = true;
  @observable items = [];
  @observable count = 0;
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

  receiveItems(items) {
    console.info('receiveItems', items);
    this.items = items;
  }
}
