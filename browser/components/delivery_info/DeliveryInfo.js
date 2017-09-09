import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// CSS
import './DeliveryInfo.scss'

// Bootstrap
import Col from 'react-bootstrap/es/Col'

// Assets
const assets = {
  cash: require('../../assets/images/paysystem/cash.png'),
  mastercard: require('../../assets/images/paysystem/mastercard.png'),
  paydirect: require('../../assets/images/paysystem/paydirect.png'),
  paypal: require('../../assets/images/paysystem/paypal.png'),
  sofort: require('../../assets/images/paysystem/sofort.png'),
  visa: require('../../assets/images/paysystem/visa.png'),
};

@withRouter
@translate(["delivery_info"])
@inject("store")
@observer
export default class DeliveryInfoComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  render() {
    return (
      <div className="delivery-info-component">
        <h1 id="store-name">{this.props.t('title')}</h1>
        <p className="worktimes"><i className="fa fa-clock-o"/>17:00 - 18:00</p>
        <p>
          <i className="fa fa-motorcycle"/>
          <span className="delivery-info-text">{this.props.t('deliveryFee')}</span> 1,50 €
        </p>
        <p>
          <i className="fa fa-shopping-cart"/>
          <span className="delivery-info-text">{this.props.t('minOrder')}</span> 8,50 €
        </p>
        <Col sm={12} xsHidden={true} mdHidden={true} lgHidden={true} className="paysystem-images">
          <img src={assets.cash}/>
          <img src={assets.paypal}/>
          <img src={assets.sofort}/>
          <img src={assets.mastercard}/>
          <img src={assets.visa}/>
          <img src={assets.paydirect}/>
        </Col>
      </div>
    );
  }
}
