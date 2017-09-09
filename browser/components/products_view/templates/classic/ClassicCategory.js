import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

// CSS
import './ClassicCategory.scss'

//Bootstrap
import Accordion from 'react-bootstrap/es/Accordion'
import Panel from 'react-bootstrap/es/Panel'
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'

// Components
import ChefLoader from '../../../loaders/chef_loader/ChefLoader'

// Utils
import {filters} from '../../../../../utils/filters'
import {generateLinkFor} from '../../../../../utils/routing'
import classNames from 'classnames'

// Config
import states from '../../../../states'


@inject("store")
@withRouter
@observer
export default class ClassicAndSpecialComponent extends Component {
  static propTypes = {
    onProductAddClick: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
  };
  static defaultProps = {};


  _handleOnCategoryClick(category) {
    this.props.history.push(generateLinkFor(states.app, this.props, {
      category: category.id
    }));
  }

  _renderProduct(item) {
    // TODO: what is J,K,Z,P,I. Need to translate? ?
    return (
      <div key={item.id} className="category-item" onClick={e => this.props.onProductAddClick(e, item)}>
        <div className="title-container">
          <div className="title">{item.name}<sup className="additives">J,K,Z,P,I</sup></div>
          <div className="description">{item.description}</div>
        </div>
        <div className="price-container">
          <span className="price">+</span> {filters.filterPrice(item.lowest_price)} €
        </div>
      </div>
    );
  }

  _renderData() {
    const activeCategory = this.props.store.categoryMenuStore.getCategory(this.props.category);
    return (
      <div>
        <div className="dropdown-category-menu hidden-md hidden-lg">
          <Accordion className="menu-wrapper">
            <Panel header={
              <Row>
                <Col xs={10} sm={11}>
                  {activeCategory.name}
                </Col>
                <Col className="i-wrapper" xs={2} sm={1}>
                  <i className="fa fa-chevron-down"/>
                </Col>
              </Row>} eventKey="1" className="pointer" collapsible={false} defaultExpanded={true}>
              {this.props.store.categoryMenuStore.categories.map((category, index) => {
                return <div
                  key={index}
                  id="mobile-category"
                  className={classNames({
                    'category': true,
                    'active': this.props.category == category.id
                  })}
                  onClick={() => this._handleOnCategoryClick(category)}>
                  <i className="fa fa-chevron-right"/>
                  <span className="name">{category.name}</span>
                </div>
              })}
            </Panel>
          </Accordion>
        </div>
        <div id="category-title" style={{backgroundImage: `url(${activeCategory.picurl})`}}>
          <Col xsHidden={true} smHidden={true} className="title">
            {activeCategory.name}
          </Col>
          <Col mdHidden={true} lgHidden={true} className="title-mobile">
            {activeCategory.name}
          </Col>
          {activeCategory.description ? <Col className="description">
            {activeCategory.description}
          </Col> : null}
        </div>
        <div className="category-items">
          {this.props.store.productsViewStore.products.map(this._renderProduct.bind(this))}
        </div>
      </div>
    );
  }

  render() {
    return this.props.store.categoryMenuStore.loading ? <ChefLoader/> : this._renderData();
  }
}
