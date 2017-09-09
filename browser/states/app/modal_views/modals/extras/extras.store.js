import {observable, computed, toJS} from 'mobx'


import {normalizeExtrasData} from '../../../../../../utils/functions'


export class ExtrasStore {
  constructor(api) {
    this.api = api;
  }


  sizes = [];
  product = [];
  extraIngredientsGroups = [];
  basicIngredientsGroups = [];
  @observable extrasExpanded = true;
  @observable loading = true;
  @observable extras = {
    size: 0,
    extraIngredients: [],
    basicIngredients: []
  };


  toggleLoading(flag) {
    console.info('toggleLoading', flag);
    this.loading = flag;
  }

  reset() {
    console.info('Resetting data');
    this.extras = {
      size: 0,
      extraIngredients: [],
      basicIngredients: []
    };
  }

  resetSizes() {
    console.info('Resetting sizes');
    this.sizes = [];
  }

  changeSize(size) {
    console.info('changeSize', size);
    if (this.extras.size !== size) {
      this.reset();
      this.extras.size = size;
    }
  }

  addIngredient(item, arr) {
    arr.push(item);
  }

  removeIngredient(id, arr) {
    arr.splice(arr.indexOf(id), 1);
  }

  loadSingleProduct(branch_id, product_id) {
    this.toggleLoading(true);
    return this.api
      .getSingleProduct(branch_id, product_id)
      .then((data) => {
        console.info('getSingleProduct', data);
        this.sizes = normalizeExtrasData(data.d.sizes);
        this.basicIngredientsGroups = normalizeExtrasData(data.d.basic_ingredients_groups).map(i => {
          i.ingredients = normalizeExtrasData(i.ingredients);
          return i;
        });
        this.extraIngredientsGroups = normalizeExtrasData(data.d.extra_ingredients_groups).map(i => {
          i.ingredients = normalizeExtrasData(i.ingredients);
          return i;
        });
        this.toggleLoading(false);
        return data;
      })
      .finally(() => {
        this.toggleLoading(false);
      });
  }

  getPriceForSize(price_diff) {
    const extra_price = price_diff[this.extras.size];
    return extra_price ? extra_price.price : false;
  }

  isIngredientActive(extraIngredients, id) {
    return !!extraIngredients.find(i => i.id === id);
  }

  calculateOrderPrice(price = 0) {
    return this.extras.extraIngredients
      .concat(this.extras.basicIngredients)
      .map(i => i.price)
      .reduce((a, b) => a + b, price);
  }

  generateProductForBasket(product, withExtra) {
    product.extras = withExtra ? this.extras : {size: this.extras.size};
    return toJS(product);
  }


  @computed get isSizeSelected() {
    return !!this.extras.size;
  }

  @computed get isSizesEmpty() {
    return this.sizes.length === 0;
  }

  @computed get fullExtras() {
    return toJS(this.extras);
  }

  @computed get partExtras() {
    const extraCopy = toJS(this.extras);
    return {
      size: extraCopy.size
    };
  }
}
