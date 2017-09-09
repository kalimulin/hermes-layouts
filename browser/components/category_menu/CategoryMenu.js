import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {conditionAPI} from '../../../config'
import {withRouter, Link} from 'react-router-dom'
import {observer, inject} from 'mobx-react'
import {translate} from 'react-i18next'
import classNames from 'classnames'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'

// Config
import states from '../../states'

// Utils
import {generateLinkFor, cantAddProductsToBasket} from '../../../utils/routing'
import {filters} from '../../../utils/filters'

// Components
import GlobalAppLoader from '../loaders/global_app_loader/GlobalAppLoader'
import DeliveryInfo from '../delivery_info/DeliveryInfo'
import OpeningHours from '../opening_hours/OpeningHours'

// CSS
import './CategoryMenu.scss'

// Assets
const assets = {
  logo: require('../../assets/images/global-navigation/logo.png')
};


@translate(["basket"])
@inject("store")
@withRouter
@observer
export default class CategoryMenuComponent extends Component {
  static propTypes = {
    category: PropTypes.string
  };
  static defaultProps = {};


  componentDidMount() {
    this.props.store.categoryMenuStore
      .getCategories(this.props.store.globalStore.branch_id)
      .then(() => {
        if(!this.props.category && !this.props.store.categoryMenuStore.isCategoriesEmpty) {
          const state = generateLinkFor(states.app, this.props, {
            category: this.props.store.categoryMenuStore.categories[0].id
          });
          this.props.history.push(state);
        }
      });
  }

  _onCategoryClick(e, navigationDisabled) {
    return navigationDisabled ? e.preventDefault() : null;
  }

  _renderData() {
    const navigationDisabled = cantAddProductsToBasket(this.props);
    return (
      <div>
        <Row>
          <Col xsHidden={true} className="global-navigation">
            <Col xs={4} md={3} className="logo-container">
              <img
                className="logo"
                src={conditionAPI ? this.props.store.globalStore.baseSettings.branch.picurl : assets.logo}
              />
            </Col>
            <Col className="menu-wrapper" xsHidden={true} smHidden={true} md={9}>
              <div className="menu-container">
                <ul className="category-navigation">
                  {this.props.store.categoryMenuStore.categories.map((category, index) => {
                    return <li
                      key={category.id}
                      className={classNames({
                        disabled: navigationDisabled,
                        category: true,
                        odd: this.props.store.categoryMenuStore.isOdd(index),
                        active: this.props.category == category.id
                      })}>
                      <i className={this.props.category == category.id ?
                        "fa fa-chevron-down" :
                        "fa fa-chevron-right"
                      }/>
                      <Link
                        className="name"
                        onClick={e => this._onCategoryClick(e, navigationDisabled)}
                        to={generateLinkFor(states.app, this.props, {
                          category: category.id,
                          product: null
                        })}>
                        <span className="name">{category.name}</span>
                      </Link>
                    </li>
                  })}
                </ul>
              </div>
            </Col>
            <Col xs={8} mdHidden={true} lgHidden={true} id="mobile-store-info">
              <DeliveryInfo/>
              <OpeningHours/>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} mdHidden={true} lgHidden={true}>
            <div id="discount">
              <div className="item-container">
                <div className="item">
                  <i className="fa fa-certificate"/>
                  {filters.filterPercentage(this.props.store.basketStore.params.discountPercentage)}% {this.props.t('discount')}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    return (
      <div id="category-menu-component" className="white-block">
        {this.props.store.categoryMenuStore.loading ? <GlobalAppLoader/> : this._renderData()}
      </div>
    )
  }
}
