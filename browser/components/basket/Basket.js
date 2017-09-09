import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Components
import EmptyCard from './empty_card/_EmptyCard'
import ToOrder from './_to_order/_ToOrder'
import ShoppingCard from './shopping_card/ShoppingCard'

// Bootstrap
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/es/MenuItem'

// Utils
import {generateLinkFor} from '../../../utils/routing'
import {filters} from '../../../utils/filters'

// Config
import states from '../../states'

// CSS
import './Basket.scss'


@withRouter
@translate(["basket", "enter_address_modal"])
@inject("store")
@observer
export default class BasketComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  componentWillMount() {
    this.props.store.orderPaymentMethodsStore.reset();
    this.props.store.basketStore.loadPaymentMethods(this.props.store.globalStore.branch_id);
  }

  _handleOrderTypeChange(type) {
    this.props.store.deliveryAddressStore.changeDeliveryOrPickUp(type);
    const hours = type === 'delivery' ?
      this.props.store.globalStore.baseSettings.branch.deliveryHours :
      this.props.store.globalStore.baseSettings.branch.openingHours;
    this.props.store.openingHoursStore.calculateOpeningHours(
      hours,
      this.props.store.globalStore.baseSettings.branch.restaurant_time
    );
  }

  _handleToOrder() {
    const state = generateLinkFor(states.app, this.props, {
      view: states.subStates.view.deliveryAddress
    });
    this.props.history.push(state);
  }

  _renderMinValueReached() {
    return <div className="min-order-value is-reached">
      <i className="fa fa-check"/>
      {this.props.t('minOrderValueIsReachedStart')}
      {filters.filterPrice(this.props.store.basketStore.params.minPrice)} €
      {this.props.t('minOrderValueIsReachedEnd')}
    </div>
  }

  _renderMinValueNotReached() {
    return <div className="min-order-value">
      {this.props.t('minOrderValueNotReachedStart')}
      {filters.filterPrice(this.props.store.basketStore.params.minPrice)} €
      {this.props.t('minOrderValueNotReachedEnd')}
    </div>
  }

  _renderData() {
    return (
      <div className="order-checkout">
        <ShoppingCard/>
        {this.props.store.basketStore.isMinValueReached ?
          this._renderMinValueReached() :
          this._renderMinValueNotReached()
        }
      </div>
    );
  }

  render() {
    let payMethodsArr = [];
    this.props.store.basketStore.paymentMethods.map(function (item) {
      payMethodsArr.push({
        description: item.description,
        id: item.id
      })
    });
    const activeOrderType = this.props.store.deliveryAddressStore.activeOrderType;
    return (
      <div id="basket-component">
        <div className="heading">
          <i className="fa fa-shopping-cart"/>{this.props.t('shoppingCart')}
        </div>
        <NavDropdown
          noCaret
          id="order-for-delivery"
          className="row order-for-delivery"
          title={
            <div>
              <div className="pull-left">
                {activeOrderType ? this.props.t(`enter_address_modal:${activeOrderType.value}`) : null}
              </div>
              <div className="pull-right">
                <i className="fa fa-chevron-down"/>
              </div>
            </div>
          }>
          {this.props.store.deliveryAddressStore.orderTypes.map((orderType) => {
            return <MenuItem
              key={orderType.value}
              eventKey={orderType.value}
              onSelect={(key) => this._handleOrderTypeChange(key)}>
              {this.props.t(`enter_address_modal:${orderType.value}`)}
            </MenuItem>
          })}
        </NavDropdown>
        {this.props.store.basketStore.isBasketEmpty ? <EmptyCard {...this.props}/> : this._renderData()}
        <ToOrder
          disabled={!this.props.store.basketStore.isMinValueReached}
          handleToOrder={this._handleToOrder.bind(this)}
          payMethods = {payMethodsArr}
          {...this.props}
        />
      </div>
    );
  }
}
