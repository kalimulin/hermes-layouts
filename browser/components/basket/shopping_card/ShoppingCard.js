import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter, Link} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Table from 'react-bootstrap/es/Table'

// Utils
import queryString from 'query-string'
import {filters} from '../../../../utils/filters'
import {generateLinkFor} from '../../../../utils/routing'

// Config
import states from '../../../states'

// CSS
import './ShoppingCard.scss'


@withRouter
@translate(["basket"])
@inject("store")
@observer
export default class ShoppingCardComponent extends Component {
  static propTypes = {
    showActionButtons: PropTypes.bool
  };
  static defaultProps = {
    showActionButtons: true
  };


  _addOneProduct(product) {
    this.props.store.basketStore.addProductToBasket(product);
  }

  _removeOneProduct(product) {
    this.props.store.basketStore.decreaseProductCount(product.id);
  }

  _changeExtras(product) {
    this.props.store.extrasStore.extras = product.extras;
    this.props.store.basketStore.decreaseProductCount(product.id, true);
  }

  _renderData() {
    const params = queryString.parse(this.props.location.search);
    return (
      <div id="shopping-card">
        <div className="shopping-list">
          {this.props.store.basketStore.basket.reverse().map((product, index) => {
            return <Table key={index}>
              <tbody>
              <tr>
                <td className="item-container">
                  <div className="item">
                    {product.name}
                  </div>
                </td>
                <td className="item-cost">
                  <div className="count">
                    {this.props.showActionButtons ?
                      <i className="fa fa-minus-circle" onClick={this._removeOneProduct.bind(this, product)}/> :
                      null}
                    {product.count}
                    {this.props.showActionButtons ?
                      <i className="fa fa-plus-circle" onClick={this._addOneProduct.bind(this, product)}/> :
                      null}
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
                        + {item.name}
                      </div>;
                    })
                  }
                  <div className="basic-price">
                    (<Link
                    className="change-button"
                    to={generateLinkFor(states.app, this.props, {
                      product: product.id,
                      category: params.category,
                      modal: states.subStates.modal.extras
                    })}
                    onClick={this._changeExtras.bind(this, product)}>
                    {this.props.t('change')}
                  </Link>)
                  </div>
                </td>
                <td className="item-cost">
                  <div className="basic-price">{
                    filters.filterPrice(this.props.store.basketStore.calculateProductPriceWithExtras(product))
                  } €
                  </div>
                  {product.extras.extraIngredients
                    .concat(product.extras.basicIngredients)
                    .map((item) => {
                      return <div key={item.id} className="price">
                        {filters.filterPrice(item.price)} €
                      </div>;
                    })
                  }
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
                <i className="fa fa-certificate"/>
                {filters.filterPercentage(this.props.store.basketStore.params.discountPercentage)}% {this.props.t('discount')}
              </div>
            </td>
            <td className="item-cost">
              -{filters.filterPrice(this.props.store.basketStore.discountPrice)} €
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
      </div>
    );
  }

  render() {
    return this.props.store.basketStore.isBasketEmpty ? null : this._renderData();
  }
}
