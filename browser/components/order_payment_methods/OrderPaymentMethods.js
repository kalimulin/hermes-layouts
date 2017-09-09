import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Button from 'react-bootstrap/es/Button'
import Radio from 'react-bootstrap/es/Radio'
import Table from 'react-bootstrap/es/Table'
import Col from 'react-bootstrap/es/Col'

//Utils
import {filters} from '../../../utils/filters'
import {generateLinkFor} from '../../../utils/routing'

// Config
import states from '../../states'


// Assets
const assets = {
  app_widget: require('../../assets/images/app-widget/android-app-de-mobile.png'),
  pay_cash: require('../../assets/images/paysystem/cash.png'),
  pay_paypal: require('../../assets/images/paysystem/paypal.png'),
};

// Components
import ChefLoader from '../loaders/chef_loader/ChefLoader'

// CSS
import './OrderPaymentMethods.scss'

// import {fake_order_paypal} from '../../../data/place_the_order'


@withRouter
@translate(["order_payment_methods"])
@inject("store")
@observer
export default class OrderPaymentMethodsComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  componentWillMount() {
    this.props.store.orderPaymentMethodsStore.reset();
    this.props.store.orderPaymentMethodsStore.loadPaymentMethods(this.props.store.globalStore.branch_id);
  }

  componentWillUnmount() {
    this.props.store.orderPaymentMethodsStore.reset();
  }

  _handlePlaceTheOrderClick(e) {
    e.preventDefault();
    if(this.props.store.orderPaymentMethodsStore.isPayPalSelected) {
      return this.props.store.orderPaymentMethodsStore.payViaPayPal(this._generateDataForPayPal());
    }
    return this.props.store.orderPaymentMethodsStore.placeTheOrder(this._generateDataForPlacingTheOrder());
  }

  _generateDataForPlacingTheOrder() {
    return {
      payment_method: this.props.store.orderPaymentMethodsStore.activePaymentMethod,
      branch_id: this.props.store.globalStore.branch_id,
      pickup: false,
      delivery_type: this.props.store.deliveryAddressStore.deliveryOrPickUp,
      lang: this.props.store.titleStore.activeLanguage.key,
      displayedPrice: this.props.store.basketStore.totalPrice,
      payment: this.props.store.basketStore.totalPrice,
      b: this.props.store.basketStore.generateBasket,
      n2: 0,
      ...this.props.store.deliveryAddressStore.address
    };
  }

  _generateDataForPayPal() {
    return {
      basket_data: this._generateDataForPlacingTheOrder(),
      params: this.props.store.basketStore.generateParamsForPayPal,
      // basket_data: fake_order_paypal,
      // params: [{
      //   quan: 1,
      //   price: 3,
      //   iname: 'Cotoletta Bolognese',
      //   discount: 1.0
      // }]
    };
  }

  _handleCancel(e) {
    e.preventDefault();
    const state = generateLinkFor(states.app, this.props, {
      view: states.subStates.view.basket
    });
    this.props.history.push(state);
  }

  _renderFeedbackInfo() {
    return (
      <div className="feedback-info">
        <Col className="hr-wrapper" xs={12} sm={12} mdHidden={true} lgHidden={true}>
          <hr/>
        </Col>
        <div className="question-text block text">{this.props.t('questionsAboutTheOrder')}</div>
        <div className="block text">{this.props.t('pleaseContact')}</div>
        <div className="address block text">
          <p className="text">{this.props.store.globalStore.baseSettings.branch.name}</p>
          <p className="text">{this.props.store.globalStore.baseSettings.branch.street}{this.props.store.globalStore.baseSettings.branch.street_no}</p>
          <p className="text">D-56412 Ruppach-Gold home</p>
        </div>
        <div className="block text">{this.props.t('tel')} <b className="tel">
          {this.props.store.globalStore.baseSettings.branch.tel}
        </b></div>
        <Col className="hr-wrapper" xs={12} sm={12} mdHidden={true} lgHidden={true}>
          <hr/>
        </Col>
        <Col className="img-wrapper" xs={12} md={12} mdHidden={true} lgHidden={true}>
          <img src={assets.app_widget}/>
        </Col>
      </div>
    );
  }

  _renderOrderError() {
    return (
      <div id="order-payment-methods" className="order-error">
        <div className="heading">
          <i className="fa fa-times"/> {this.props.t('error')}
        </div>
        <div className="wrapper">
          <p className="title">{this.props.store.orderPaymentMethodsStore.err.eTitle}</p>
          <p className="description">{this.props.store.orderPaymentMethodsStore.err.e}</p>
        </div>
      </div>
    );
  }

  _renderOrderSuccess() {
    return (
      <div id="order-payment-methods" className="order-success">
        <div className="heading">
          <i className="fa fa-check"/> {this.props.t('thankYou')}
        </div>
        <div className="wrapper">
          <p className="title">{this.props.t('yourOrderWillBeSent')}</p>
          <p className="description">
            {this.props.t('orderHasBeenSent')} {this.props.store.deliveryAddressStore.address.email}
          </p>
          {this._renderFeedbackInfo()}
        </div>
      </div>
    );
  }

  _renderMethod(item) {
    let imagefile;
    switch (item.id) {
      case '5': {
        imagefile = assets.pay_paypal;
        break
      }
      default : {
        imagefile = assets.pay_cash
      }
    }
    return (
      <Radio
        key={item.id}
        name="paymentMethod"
        onClick={() => {
          this.props.store.orderPaymentMethodsStore.changePaymentMethod(item.id);
        }}>
        <div className="paysystem">
          <span className="paysystem-image">
            <img src={imagefile} />
          </span>
          {item.description}
        </div>
      </Radio>
    );
  }

  _renderData() {
    if(this.props.store.orderPaymentMethodsStore.isError) return this._renderOrderError();
    if(this.props.store.orderPaymentMethodsStore.isOrderSent) return this._renderOrderSuccess();
    return (
      <form id="order-payment-methods" onSubmit={this._handlePlaceTheOrderClick.bind(this)}>
        <div className="heading">
          <i className="fa fa-tasks"/> {this.props.t('order')}
        </div>
        <div className="paymethod-title">
          {this.props.t('yourOrder')}
        </div>
        <div className="shopping-list">
          {this.props.store.basketStore.basket.reverse().map((product, index) => {
            return <Table key={index}>
              <tbody>
              <tr>
                <td className="item-container">
                  <div className="item">
                    {product.count} X {product.name}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="item-container">
                  <div className="basic-price">
                    {this.props.t('basicPrice')} - {product.lowest_price} <i>(size - {product.extras.size})</i>
                  </div>
                  {product.extras.extraIngredients
                    .concat(product.extras.basicIngredients)
                    .map((item) => {
                      return <div key={item.id} className="basic-price">
                        + {item.name} <i>({filters.filterPrice(item.price)}) €</i>
                      </div>;
                    })
                  }
                  {product.extras.extraIngredients.map((item) => {
                    return <div key={item.id} className="basic-price">
                      + {item.name} <i>({filters.filterPrice(item.price)}) €</i>
                    </div>;
                  })}
                </td>
                <td className="item-cost">
                  <div className="basic-price">{
                    filters.filterPrice(this.props.store.basketStore.calculateProductPriceWithExtras(product))
                  } €
                  </div>
                </td>
              </tr>
              </tbody>
            </Table>;
          })}
        </div>

        <hr/>

        <Table className="total">
          <tbody>
          <tr>
            <td className="item-container">
              <div className="item">
                {this.props.t('orderPrice')}
              </div>
            </td>
            <td className="item-cost">
              {filters.filterPrice(this.props.store.basketStore.orderPrice)} €
            </td>
          </tr>
          <tr className="discount">
            <td className="item-container">
              <div className="item">
                {this.props.t('discount')} ({this.props.store.basketStore.preparePercentage}%)
              </div>
            </td>
            <td className="item-cost">
              - {filters.filterPrice(this.props.store.basketStore.discountPrice)} €
            </td>
          </tr>
          <tr>
            <td className="item-container">
              <div className="item">
                {this.props.t('deliveryFee')}
              </div>
            </td>
            <td className="item-cost">
              {filters.filterPrice(this.props.store.basketStore.params.deliveryFee)} €
            </td>
          </tr>
          <tr>
            <td className="item-container total">
              <div className="item">
                {this.props.t('total')}
              </div>
            </td>
            <td className="item-cost total">
              {filters.filterPrice(this.props.store.basketStore.totalPrice)} €
            </td>
          </tr>
          </tbody>
        </Table>
        <div className="paymethod-title">
          {this.props.t('choosePaymentMethod')}
        </div>
        <div className="paymethods">
          {this.props.store.orderPaymentMethodsStore.paymentMethods.map(this._renderMethod.bind(this))}
        </div>
        <p className="bottom-text">{this.props.t('onlineOrder')}
          <span>{this.props.t('termsOfService')}</span>.
        </p>
        <Button
          block
          disabled={!this.props.store.orderPaymentMethodsStore.isPaymentMethodSelected}
          type="submit"
          bsStyle="success">
          {this.props.t('orderPrice')}
          &nbsp;
          {this.props.store.basketStore.totalPrice} €
        </Button>
        <Button
          block
          className="light-grey-btn"
          onClick={this._handleCancel.bind(this)}>
          {this.props.t('back')}
        </Button>
      </form>
    );
  }

  _renderOrderInProcess() {
    return (
      <div id="order-payment-methods" className="order-in-process">
        <div className="heading">
          <i className="fa fa-check"/> {this.props.t('ordering')}
        </div>
        <div className="wrapper">
          <p className="title">{this.props.t('yourOrderWillBeSent')}</p>
          <ChefLoader/>
          {this._renderFeedbackInfo()}
        </div>
      </div>
    );
  }

  render() {
    return this.props.store.orderPaymentMethodsStore.orderInProcess ? this._renderOrderInProcess() : this._renderData();
  }
}
