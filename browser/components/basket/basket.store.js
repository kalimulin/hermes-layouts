import {observable, computed, toJS} from 'mobx'
import isEqual from 'lodash/isEqual'


export class BasketStore {
  constructor(api) {
    this.api = api;
  }


  _localStorageKey = 'basket';
  @observable params = {
    minPrice: 0,
    discountPercentage: 0,
    deliveryFee: 1.50 // TODO: Alex, where to get it?
  };
  @observable basket = [];
  @observable paymentMethods = [];

  changeParams(branch) {
    this.params.minPrice = branch.mbw;
    this.params.discountPercentage = (branch.discount / 100);
    this.params.minPrice = branch.mbw;
  }

  addProductToBasket(product) {
    console.info('addProductToBasket', product);
    const hasProduct = this.basket.find((item) => {
      const extrasEqual = isEqual(item.extras, product.extras);
      return item.id === product.id && extrasEqual;
    });
    if (hasProduct) {
      hasProduct.count++;
    } else {
      this.basket.push(product);
    }
    this.saveBasketToLocalStorage();
  }

  decreaseProductCount(id, force) {
    const product = this.basket.find(item => item.id === id);
    console.info('decreaseProductCount', product);
    if (force || product.count === 1) {
      this.basket.splice(this.basket.findIndex(item => item.id === id), 1);
    } else {
      product.count--;
    }
    this.saveBasketToLocalStorage();
  }

  calculatePriceOfExtras(product) {
    return product.extras.extraIngredients
      .concat(product.extras.basicIngredients)
      .map(i => i.price)
      .reduce((a, b) => a + b, 0);
  }

  calculateProductPriceWithExtras(product) {
    return product.lowest_price + this.calculatePriceOfExtras(product);
  }

  loadBasketFromLocalStorage() {
    this.basket = JSON.parse(localStorage.getItem(this._localStorageKey)) || [];
    console.info('Load Basket From Local Storage', this.basket);
    // this.deleteBasketFromLocalStorage();
  }

  saveBasketToLocalStorage() {
    console.info('Save Basket To Local Storage', this.basket);
    localStorage.setItem(this._localStorageKey, JSON.stringify(toJS(this.basket)));
  }

  deleteBasketFromLocalStorage() {
    console.info('deleteBasketFromLocalStorage');
    localStorage.removeItem(this._localStorageKey);
  }

  loadPaymentMethods(branch_id) {
    console.info('--- Load payment methods', this);
    if (this.isPaymentMethodsEmpty) {
      this.orderInProcess = true;
      return this.api
        .getPaymentMethods(branch_id)
        .then((data) => {
          this.paymentMethods = data.payment_methods;
          return data;
        })
        .catch((err) => {
          this.err = err;
        })
        .finally(() => {
          this.orderInProcess = false;
        });
    }
  }

  @computed get isBasketEmpty() {
    return this.basket.length === 0;
  }

  @computed get orderPrice() {
    return this.basket
      .map((product) => (product.lowest_price * product.count) + (this.calculatePriceOfExtras(product) * product.count))
      .reduce((a, b) => a + b, 0);
  }

  @computed get discountPrice() {
    return this.orderPrice * this.params.discountPercentage;
  }

  @computed get totalPrice() {
    if (this.orderPrice) {
      return (this.orderPrice - this.discountPrice) + this.params.deliveryFee;
    }
    return 0;
  }

  @computed get isMinValueReached() {
    return this.totalPrice >= this.params.minPrice;
  }

  @computed get generateBasket() {
    return this.basket.map((item) => {
      return {
        p: item.id,
        q: item.count,
        sid: item.extras.size,
        xm: item.extras.extraIngredients.map((ing) => {
          return {
            id: ing.id,
            gi: ing.id
          };
        })
      };
    });
  }

  @computed get generateParamsForPayPal() {
    return this.basket.map((item) => {
      return {
        quan: item.count,
        price: item.lowest_price,
        iname: item.name,
        discount: (item.lowest_price * this.params.discountPercentage) * item.count
      };
    });
  }

  @computed get isPaymentMethodsEmpty() {
    return this.paymentMethods.length === 0;
  }
}
