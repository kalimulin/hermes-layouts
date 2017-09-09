import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Modal from 'react-bootstrap/es/Modal'
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'
import Button from 'react-bootstrap/es/Button'
import Panel from 'react-bootstrap/es/Panel'

// Components
import ModalFooter from '../../../../../components/modals_components/footer/Footer'
import ChefLoader from '../../../../../components/loaders/chef_loader/ChefLoader'

// Utils
import {generateLinkFor} from '../../../../../../utils/routing'
import states from '../../../../../states'
import {filters} from '../../../../../../utils/filters'
import classNames from 'classnames'

// CSS
import './Extras.scss'


@withRouter
@translate(["extras_modal", "modal_footer_common"])
@inject("store")
@observer
export default class ExtrasModalComponent extends Component {
  static propTypes = {
    product: PropTypes.string.isRequired
  };
  static defaultProps = {};


  componentWillMount() {
    this.props.store.extrasStore.loadSingleProduct(this.props.store.globalStore.branch_id, this.props.product);
  }

  componentWillUnmount() {
    this.props.store.extrasStore.reset();
    this.props.store.extrasStore.resetSizes();
  }

  _abort() {
    const state = generateLinkFor(states.app, this.props, {modal: null, product: null});
    console.info('Going to state', state);
    this.props.history.push(state);
  }

  _confirm(product, withExtra) {
    const hasBoxes = false;
    const modal = hasBoxes ? {modal: states.subStates.modal.chooseBox} : {modal: null, product: null};
    const state = generateLinkFor(states.app, this.props, modal);
    product = this.props.store.extrasStore.generateProductForBasket(product, withExtra);
    this.props.store.basketStore.addProductToBasket(product);
    this.props.history.push(state);
  }

  _onSizeClick(size) {
    this.props.store.extrasStore.changeSize(size);
  }

  _renderSizesPanel() {
    return <Panel header={<h4>{this.props.t('chooseSize')}</h4>}>
      {this.props.store.extrasStore.sizes.map((size) => {
        const isSizeActive = size.id === this.props.store.extrasStore.extras.size;
        return (
          <Col key={size.id} xs={6} sm={4}>
            <Button
              block
              className={classNames({
                "option": true,
                "size-option": true,
                "light-grey-btn": !isSizeActive,
                "dark-grey-btn": isSizeActive
              })}
              onClick={() => this._onSizeClick(size.id)}
            >{size.name}</Button>
          </Col>
        );
      })}
    </Panel>;
  }

  _renderIngredientGroup(group, ingredients) {
    // TODO: Alex, extend in separate component
    const header = <h4>
      <i className={classNames({
        "fa": true,
        "fa-chevron-right": true,
        "fa-rotate-90": group.expanded
      })}/>{group.description}
    </h4>;
    return <Panel
      collapsible
      key={group.id}
      header={header}>
      {group.ingredients.map((item) => {
        const extra_price = this.props.store.extrasStore.getPriceForSize(item.price_diff);
        const isGroupActive = this.props.store.extrasStore.isIngredientActive(ingredients, item.id);
        return <Col key={item.id} xs={12} sm={4}>
          <Button
            onClick={() => {
              if(isGroupActive) {
                return this.props.store.extrasStore.removeIngredient(item.id, ingredients);
              }
              if(ingredients.length === group.max_quan) {
                return false;
              }
              this.props.store.extrasStore.addIngredient({
                id: item.id,
                name: item.name,
                price: extra_price
              }, ingredients);
            }}
            className={classNames({
              "option": true,
              "extra-option": true,
              "light-grey-btn": !isGroupActive,
              "dark-grey-btn": isGroupActive
            })}>
            <i
              className={classNames({
                "fa": true,
                "fa-plus": !isGroupActive,
                "fa-minus": isGroupActive
              })}/>
            <p className="text">{item.name} ({extra_price} €)</p>
          </Button>
        </Col>
      })}
    </Panel>;
  }

  _renderData() {
    const product = this.props.store.productsViewStore.getProduct(this.props.product);
    const confirmText = this.props.t('modal_footer_common:confirm');
    const orderPrice = `(${filters.filterPrice(this.props.store.extrasStore.calculateOrderPrice(product.lowest_price))} €)`;
    return (
      <div id="extras-modal-state">
        <Modal.Header>
          <Row>
            <Col xs={12} sm={7}>
              {this.props.store.productsViewStore.products.length > 0 ?
                <h4>{product.name}</h4> :
                null
              }
            </Col>
            <Col xsHidden={true} sm={5} className="text-right">
              <Button
                bsStyle="success"
                onClick={this._confirm.bind(this, product)}
                disabled={!this.props.store.extrasStore.isSizeSelected}
                block
              >
                {this.props.t('confirm')} ({filters.filterPrice(product.lowest_price)} €)
              </Button>
            </Col>
          </Row>
          <h5>mit Sardellen, Kapern, Zwiebeln und Oliven</h5>
        </Modal.Header>

        <Row>
          {this.props.store.productsViewStore.isProductsEmpty ? null : this._renderSizesPanel()}
          {this.props.store.extrasStore.isSizeSelected ?
            this.props.store.extrasStore.basicIngredientsGroups.map((i) => {
              return this._renderIngredientGroup(i, this.props.store.extrasStore.extras.basicIngredients);
            }) :
            null}
          {this.props.store.extrasStore.isSizeSelected ?
            this.props.store.extrasStore.extraIngredientsGroups.map((i) => {
              return this._renderIngredientGroup(i, this.props.store.extrasStore.extras.extraIngredients);
            }) :
            null}
        </Row>

        <ModalFooter
          abort={this._abort.bind(this)}
          confirm={this._confirm.bind(this, product, true)}
          disabled={!this.props.store.extrasStore.isSizeSelected}
          confirmText={`${confirmText} ${orderPrice}`}
        />
      </div>
    );
  }

  render() {
    return this.props.store.extrasStore.loading || this.props.store.productsViewStore.isProductsEmpty ?
      <ChefLoader/> :
      this._renderData();
  }
}
