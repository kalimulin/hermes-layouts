import {observable, computed} from 'mobx'

export class CategoryMenuStore {
  constructor(api) {
    this.api = api;
  }


  @observable categories = [];
  @observable loading = true;


  toggleLoading(flag) {
    console.info('toggleLoading', flag);
    this.loading = flag;
  }

  getCategories(branch_id) {
    this.toggleLoading(true);
    return this.api
      .getCategories(branch_id)
      .then((data) => {
        console.info('getCategories', data);
        this.categories = data.d;
        return data;
      })
      .finally(() => {
        this.toggleLoading(false);
      });
  }

  getCategory(id) {
    return this.categories.find(i => i.id == id);
  }

  isOdd(index) {
    return !(Math.floor(index / 3) % 2);
  }


  @computed get isCategoriesEmpty() {
    return this.categories.length === 0;
  }
}
