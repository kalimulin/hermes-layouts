import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Components
import Basket from '../../../components/basket/Basket'
import BusinessDelivery from '../../../components/business_delivery/BusinessDelivery'
import DeliveryAddress from '../../../components/delivery_address/DeliveryAddress'
import OrderPaymentMethods from '../../../components/order_payment_methods/OrderPaymentMethods'

// CSS
import './Home.scss'

// Config
import states from '../../../states'


@withRouter
@translate(["home"])
@inject("store")
@observer
export default class HomeComponent extends Component {
  static propTypes = {
    view: PropTypes.string.isRequired
  };
  static defaultProps = {
    view: 'basket'
  };


  render() {
    return (
      <div id="home-state">
        {this.props.view === states.subStates.view.basket ? <Basket {...this.props}/> : null}
        {this.props.view === states.subStates.view.deliveryAddress ? <DeliveryAddress {...this.props}/> : null}
        {this.props.view === states.subStates.view.orderPaymentMethods ? <OrderPaymentMethods {...this.props}/> : null}
        {this.props.view === states.subStates.view.basket && this.props.store.globalStore.businessDelivery ?
          <BusinessDelivery {...this.props}/> :
          null}
      </div>
    );
  }
}
