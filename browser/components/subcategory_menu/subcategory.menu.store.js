import {observable} from 'mobx'


export class SubcategoryMenuStore {
  constructor(api) {
    this.api = api;
  }


  @observable subcategories = [];
  @observable loading = false;


  getSubcategories() {
    return this.api
      .getSubcategories()
      .then((data) => {
        console.info('getSubcategories', data);
        this.subcategories = data.d;
        return data;
      });
  }
}
