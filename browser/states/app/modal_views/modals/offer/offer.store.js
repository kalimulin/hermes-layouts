import {observable} from 'mobx'


export class OfferStore {
  constructor(api) {
    this.api = api;
  }


  @observable offer = {
    size: 0
  };
  @observable activeProductIndex = 0;


  reset() {
    this.offer.size = 0;
    this.activeProductIndex = 0;
  }

  changeSize(size) {
    console.info('changeSize', size);
    this.offer.size = size;
  }

  changeActiveProductIndex(index) {
    console.info('changeActiveProductIndex', index);
    this.activeProductIndex = index;
  }
}
