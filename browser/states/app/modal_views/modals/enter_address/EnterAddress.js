import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Modal from 'react-bootstrap/es/Modal'
import FormGroup from 'react-bootstrap/es/FormGroup'
import FormControl from 'react-bootstrap/es/FormControl'
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'
import Button from 'react-bootstrap/es/Button'

// Components
import ModalFooter from '../../../../../components/modals_components/footer/Footer'

// Utils
import {generateLinkFor} from '../../../../../../utils/routing'
import states from '../../../../../states'

// Assets
const assets = {
  house: require('../../../../../assets/images/enter-address/house.png')
};

// CSS
import './EnterAddress.scss'


@withRouter
@translate(["enter_address_modal"])
@inject("store")
@observer
export default class EnterAddressModalComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


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

  _abort() {
    const state = generateLinkFor(states.app, this.props, {modal: null});
    this.props.store.deliveryAddressStore.resetPartOfAddress();
    console.info('Going to state', state);
    this.props.history.push(state);
  }

  _confirm(e) {
    e.preventDefault();
    const hasExtras = true;
    const modal = hasExtras ? {modal: states.subStates.modal.extras} : {
      modal: states.subStates.modal.enterAddress
    };
    const state = generateLinkFor(states.app, this.props, modal);
    this.props.history.push(state);
  }

  render() {
    return (
      <form id="enter-address-modal-state" onSubmit={this._confirm.bind(this)}>
        <Modal.Header>
          <img className="img-house" src={assets.house}/>
          {this.props.t('header')}
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={7}>
              <FormGroup
                controlId="street">
                <FormControl
                  type="text"
                  placeholder={this.props.t('street')}
                  value={this.props.store.deliveryAddressStore.address.street}
                  onChange={(e) => {
                    this.props.store.deliveryAddressStore.changeStreet(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
            <Col xs={5}>
              <FormGroup
                controlId="street_no">
                <FormControl
                  type="text"
                  placeholder={this.props.t('number')}
                  value={this.props.store.deliveryAddressStore.address.street_no}
                  onChange={(e) => {
                    this.props.store.deliveryAddressStore.changeStreetNo(e.target.value);
                  }}
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup
            controlId="zip">
            <FormControl
              type="number"
              placeholder={this.props.t('zip')}
              value={this.props.store.deliveryAddressStore.address.zip}
              onChange={(e) => {
                this.props.store.deliveryAddressStore.changeZip(e.target.value);
              }}
            />
          </FormGroup>
          <div className="btn-container">
            {this.props.store.deliveryAddressStore.orderTypes.map((orderType) => {
              return (
                <Button
                  key={orderType.value}
                  className={orderType.active ? 'dark-grey-btn' : 'light-grey-btn'}
                  onClick={() => this._handleOrderTypeChange(orderType.value)}>
                  {this.props.t(orderType.value)}
                </Button>
              );
            })}
          </div>
        </Modal.Body>
        <ModalFooter
          abort={this._abort.bind(this)}
          confirm={this._confirm.bind(this)}
          disabled={!this.props.store.deliveryAddressStore.isPartOfAddressEntered}
        />
      </form>
    );
  }
}
