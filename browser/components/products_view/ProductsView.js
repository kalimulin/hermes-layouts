import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Components
import ChefLoader from '../loaders/chef_loader/ChefLoader'

// Templates
import ClassicProductsTemplate from './templates/classic/ClassicCategory'

// Config
import states from '../../states'

// Utils
import {generateLinkFor, cantAddProductsToBasket} from '../../../utils/routing'

// CSS
import './ProductsView.scss'


@withRouter
@translate(["product_view"])
@inject("store")
@observer
export default class ProductsViewComponent extends Component {
  static propTypes = {
    category: PropTypes.string,
    product: PropTypes.string
  };
  static defaultProps = {};


  componentWillMount() {
    if(this.props.category) {
      this._loadProducts(this.props.category);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.category && (nextProps.category !== this.props.category)) {
      this._loadProducts(nextProps.category);
    }
  }

  componentWillUnmount() {
    this.props.store.productsViewStore.reset();
  }

  _onProductAddClick(e, item) {
    if (cantAddProductsToBasket(this.props)) {
      return e.preventDefault();
    }
    const hasExtras = true;
    const options = {
      product: item.id
    };
    if (this.props.store.deliveryAddressStore.isPartOfAddressEntered) {
      if (hasExtras) {
        options.modal = states.subStates.modal.extras
      }
    } else {
      options.modal = states.subStates.modal.enterAddress;
    }
    const state = generateLinkFor(states.app, this.props, options);
    // this.props.store.extrasStore.changeActiveProductIndex(item.id);
    this.props.history.push(state);
  }

  _loadProducts(category) {
    this.props.store.productsViewStore.getProductsOfCategory(this.props.store.globalStore.branch_id, category);
  }

  _renderData() {
    console.info(`Rendering products of category - ${this.props.category} with Classic template`);
    return (
      <div id="products-view-component">
        <ClassicProductsTemplate
          onProductAddClick={this._onProductAddClick.bind(this)}
          {...this.props}
        />
      </div>
    );
  }

  render() {
    return this.props.category ?
      (this.props.store.productsViewStore.loading ? <ChefLoader/> : this._renderData()) :
      null
  }
}
