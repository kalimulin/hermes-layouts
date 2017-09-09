import {observable, computed} from 'mobx'


export class OrderPaymentMethodsStore {
  constructor(api) {
    this.api = api;
  }


  @observable err = {
    eTitle: '',
    e: ''
  };
  @observable paymentMethods = [];
  @observable activePaymentMethod = 0;
  @observable isOrderSent = false;
  @observable orderInProcess = false;


  changePaymentMethod(id) {
    console.info('Change payment method', id);
    this.activePaymentMethod = id;
  }

  placeTheOrder(order) {
    console.info('Placing the order', order);
    this.reset();
    this.orderInProcess = true;
    return this.api
      .placeTheOrder(order)
      .then((data) => {
        this.isOrderSent = true;
        return data;
      })
      .catch((err) => {
        this.err = err;
      })
      .finally(() => {
        this.orderInProcess = false;
      });
  }

  payViaPayPal(order) {
    console.info('Pay via PayPal', order);
    this.orderInProcess = true;
    return this.api
      .payPallInit(order)
      .then((data) => {
        window.location = data.response;
        return data;
      })
      .catch((err) => {
        this.err = err;
      })
      .finally(() => {
        this.orderInProcess = false;
      });
  }

  loadPaymentMethods(branch_id) {
    console.info('Load payment methods');
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

  reset() {
    console.info('Resetting order payment store');
    this.err = {
      eTitle: '',
      e: ''
    };
    this.isOrderSent = false;
    this.orderInProcess = false;
  }


  @computed get isError() {
    return !!this.err.e;
  }

  @computed get isPaymentMethodSelected() {
    return !!this.activePaymentMethod;
  }

  @computed get isPayPalSelected() {
    return this.activePaymentMethod == 5;
  }

  @computed get isPaymentMethodsEmpty() {
    return this.paymentMethods.length === 0;
  }
}
