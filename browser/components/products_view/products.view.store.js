import {observable, computed} from 'mobx'


export class ProductsViewStore {
  constructor(api) {
    this.api = api;
  }


  @observable loading = true;
  @observable products = [];


  toggleLoading(flag) {
    console.info('toggleLoading', flag);
    this.loading = flag;
  }

  getProductsOfCategory(branch_id, category_id) {
    this.toggleLoading(true);
    return this.api
      .getProductsOfCategory(branch_id, category_id)
      .then((data) => {
        console.info('getProductsOfCategory', data);
        this.toggleLoading(false);
        this.products = data.d.map(i => {
          i.count = 1;
          return i;
        });
        return data;
      })
      .catch((err) => {
        console.error(err);
        alert(err.eTitle);
      });
  }

  getProduct(id) {
    id = parseInt(id, 10);
    return this.products.find(i => i.id === id);
  }

  reset() {
    this.products = [];
  }


  @computed get isProductsEmpty() {
    return this.products.length === 0;
  }
}
