import {observable, computed, toJS} from 'mobx'
import {conditionAddressEntered} from '../../../config'


export class DeliveryAddressStore {
  constructor(api) {
    this.api = api;
  }


  _localStorageKey = 'address';
  _lastUpdatedKey = 'last_updated_address';
  @observable address = {
    delivery_time: window.TIME_NOW,
    first_name: '',
    last_name: '',
    city: '',
    zip: '',
    company: '',
    email: '',
    phone: '',
    street: '',
    street_no: '',
    floor: '',
    massage: ''
  };
  @observable orderTypes = [];
  @observable deliveryOrPickUp = 'delivery';


  saveAddress() {
    console.info('Saving address', this.address);
    localStorage.setItem(this._localStorageKey, JSON.stringify(toJS(this.address)));
    localStorage.setItem(this._lastUpdatedKey, window.TIME_NOW);
  }

  loadAddress() {
    const lastUpdated = new Date(localStorage.getItem(this._lastUpdatedKey));
    const diffInDays = (window.TIME_NOW - lastUpdated) / 86400000;
    console.info('Diff in days', diffInDays);
    if (diffInDays < 1) {
      this.address = JSON.parse(localStorage.getItem(this._localStorageKey));
      console.info('Load address', this.address);
    }
  }

  changeDelivery_time(value) {
    console.info('changeDelivery_time', value);
    this.address.delivery_time = value;
  }

  changeDeliveryOrPickUp(value) {
    this.orderTypes.map((i) => {
      i.active = i.value === value;
      return i;
    });
  }

  changeStreet(value) {
    console.info('changeStreet', value);
    this.address.street = value;
  }

  changeCity(value) {
    console.info('changeCity', value);
    this.address.city = value;
  }

  changeZip(value) {
    console.info('changeZip', value);
    this.address.zip = value;
  }

  changeFirst_name(value) {
    console.info('changeFirst_name', value);
    this.address.first_name = value;
  }

  changeLast_name(value) {
    console.info('changeLast_name', value);
    this.address.last_name = value;
  }

  changeStreetNo(value) {
    console.info('changeStreetNo', value);
    this.address.street_no = value;
  }

  changeEmail(value) {
    console.info('changeEmail', value);
    this.address.email = value;
  }

  changePhone(value) {
    console.info('changePhone', value);
    this.address.phone = value;
  }

  changeCompany(value) {
    console.info('changeCompany', value);
    this.address.company = value;
  }

  changeFloor(value) {
    console.info('changeFloor', value);
    this.address.floor = value;
  }

  changeMassage(value) {
    console.info('changeMassage', value);
    this.address.massage = value;
  }

  generateOrderTypes(value) {
    const delivery = {value: 'delivery', active: false};
    const pickup = {value: 'selfcollect', active: false};
    switch(value) {
      case '0':
        delivery.active = true;
        this.orderTypes.push(delivery, pickup);
        break;
      case '1':
        delivery.active = true;
        this.orderTypes.push(delivery);
        break;
      case '2':
        pickup.active = true;
        this.orderTypes.push(pickup);
        break;
    }
    console.info('Order types generated', this.orderTypes);
    return this.activeOrderType.value;
  }

  generateDeliveryTimeOptions(minutesToAdd, minutesLeft, arr = []) {
    arr.push(window.TIME_NOW.clone().add(minutesToAdd, 'minutes'));
    minutesToAdd += 15;
    return minutesToAdd < minutesLeft ? this.generateDeliveryTimeOptions(minutesToAdd, minutesLeft, arr) : arr;
  }

  resetPartOfAddress() {
    this.address.street = '';
    this.address.street_no = '';
    this.address.zip = '';
  }


  @computed get isDelivery() {
    return this.deliveryOrPickUp === 'delivery';
  }

  @computed get activeOrderType() {
    return this.orderTypes.find(i => i.active);
  }

  @computed get validationFirst_name() {
    return this.address.first_name.length > 0 ? 'success' : 'error';
  }

  @computed get validationLast_name() {
    return this.address.last_name.length > 0 ? 'success' : 'error';
  }

  @computed get validationStreet() {
    return this.address.street.length > 0 ? 'success' : 'error';
  }

  @computed get validationDelivery_time() {
    return this.address.delivery_time.length > 0 ? 'success' : 'error';
  }

  @computed get validationStreetNo() {
    return this.address.street_no.length > 0 ? 'success' : 'error';
  }

  @computed get validationEmail() {
    return this.address.email.length > 0 ? 'success' : 'error';
  }

  @computed get validationPhone() {
    return this.address.phone.length > 0 ? 'success' : 'error';
  }

  @computed get validationZip() {
    return this.address.zip.length > 0 ? 'success' : 'error';
  }

  @computed get validationCity() {
    return this.address.city.length > 0 ? 'success' : 'error';
  }

  @computed get isPartOfAddressEntered() {
    return !conditionAddressEntered || !!(this.address.street && this.address.street_no && this.address.zip);
  }

  @computed get isFullAddressEntered() {
    return !!(!conditionAddressEntered ||
      this.address.first_name &&
      this.address.last_name &&
      this.address.city &&
      this.address.zip &&
      this.address.email &&
      this.address.phone &&
      this.address.street &&
      this.address.street_no);
  }
}
