import {observable, computed} from 'mobx'


export class EnterCompanyCodeStore {
  constructor(api) {
    this.api = api;
  }


  @observable companyCode = '';


  changeCompanyCode(value) {
    console.info('changeCompanyCode', value);
    this.companyCode = value;
  }


  @computed get isCompanyCodeEntered() {
    return !!this.companyCode;
  }
}
