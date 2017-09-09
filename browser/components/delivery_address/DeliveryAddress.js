import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import FormGroup from 'react-bootstrap/es/FormGroup'
import FormControl from 'react-bootstrap/es/FormControl'
// import HelpBlock from 'react-bootstrap/es/HelpBlock'
import Button from 'react-bootstrap/es/Button'

// CSS
import './DeliveryAddress.scss'

// Utils
import {generateLinkFor} from '../../../utils/routing'

// Config
import states from '../../states'


@withRouter
@translate(["address_form"])
@inject("store")
@observer
export default class DeliveryAddressComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  _onFormSubmit(e) {
    e.preventDefault();
    const state = generateLinkFor(states.app, this.props, {
      view: states.subStates.view.orderPaymentMethods
    });
    this.props.store.deliveryAddressStore.saveAddress();
    this.props.history.push(state);
  }

  _handleCancel(e) {
    e.preventDefault();
    const state = generateLinkFor(states.app, this.props, {
      view: states.subStates.view.basket
    });
    this.props.history.push(state);
  }

  render() {
    const minutesLeft = this.props.store.globalStore.timeBoth.delivery.secondsUntilClosing / 60;
    return (
      <form id="address-form-component" onSubmit={this._onFormSubmit.bind(this)}>
        <div className="heading">
          <i className="fa fa-map-marker"/>{this.props.t('deliveryInfo')}
        </div>
        <div id="time-form-component">
          <span className="time-name">{this.props.t('timeName')}:</span>
          <FormGroup
            controlId="delivery_time"
            className="delivery-time"
            validationState={this.props.store.deliveryAddressStore.validationDelivery_time}>
            <FormControl
              componentClass="select"
              className="time-select"
              value={this.props.store.deliveryAddressStore.address.delivery_time}
              onChange={(e) => {
                this.props.store.deliveryAddressStore.changeDelivery_time(e.target.value);
              }}>
              <option>{this.props.t('deliveryTime')}</option>
              {this.props.store.deliveryAddressStore.generateDeliveryTimeOptions(15, minutesLeft).map((time, index) => {
                return <option key={index}>{time.format('HH:mm')}</option>
              })}
            </FormControl>
          </FormGroup>
        </div>
        <hr/>
        <div className="order-form">
          <div>
            <FormGroup
              controlId="first_name"
              validationState={this.props.store.deliveryAddressStore.validationFirst_name}>
              <FormControl
                type="text"
                placeholder={this.props.t('firstName')}
                value={this.props.store.deliveryAddressStore.address.first_name}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeFirst_name(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup
              controlId="last_name"
              validationState={this.props.store.deliveryAddressStore.validationLast_name}>
              <FormControl
                type="text"
                placeholder={this.props.t('lastName')}
                value={this.props.store.deliveryAddressStore.address.last_name}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeLast_name(e.target.value);
                }}
              />
              {/*<HelpBlock>Please enter your {this.props.t('lastName')}</HelpBlock>*/}
            </FormGroup>
            <FormGroup
              controlId="street"
              validationState={this.props.store.deliveryAddressStore.validationStreet}>
              <FormControl
                type="text"
                placeholder={this.props.t('street')}
                value={this.props.store.deliveryAddressStore.address.street}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeStreet(e.target.value);
                }}
              />
              {/*<HelpBlock>Please enter your {this.props.t('street')}</HelpBlock>*/}
            </FormGroup>
            <FormGroup
              controlId="street_no"
              validationState={this.props.store.deliveryAddressStore.validationStreetNo}>
              <FormControl
                type="text"
                placeholder={this.props.t('number')}
                value={this.props.store.deliveryAddressStore.address.street_no}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeStreetNo(e.target.value);
                }}
              />
              {/*<HelpBlock>Please enter your {this.props.t('number')}</HelpBlock>*/}
            </FormGroup>
            <FormGroup
              controlId="zip"
              validationState={this.props.store.deliveryAddressStore.validationZip}>
              <FormControl
                type="number"
                placeholder={this.props.t('zip')}
                value={this.props.store.deliveryAddressStore.address.zip}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeZip(e.target.value);
                }}
              />
              {/*<HelpBlock>Please enter your {this.props.t('zip')}</HelpBlock>*/}
            </FormGroup>
            <FormGroup
              controlId="city"
              validationState={this.props.store.deliveryAddressStore.validationCity}>
              <FormControl
                type="text"
                placeholder={this.props.t('city')}
                value={this.props.store.deliveryAddressStore.address.city}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeCity(e.target.value);
                }}
              />
              {/*<HelpBlock>Please enter your {this.props.t('city')}</HelpBlock>*/}
            </FormGroup>
            <FormGroup
              controlId="email"
              validationState={this.props.store.deliveryAddressStore.validationEmail}>
              <FormControl
                type="email"
                placeholder={this.props.t('emailAddress')}
                value={this.props.store.deliveryAddressStore.address.email}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeEmail(e.target.value);
                }}
              />
              {/*<HelpBlock>Please enter your {this.props.t('emailAddress')}</HelpBlock>*/}
            </FormGroup>
            <FormGroup
              controlId="phone"
              validationState={this.props.store.deliveryAddressStore.validationPhone}>
              <FormControl
                type="tel"
                placeholder={this.props.t('phone')}
                value={this.props.store.deliveryAddressStore.address.phone}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changePhone(e.target.value);
                }}
              />
              {/*<HelpBlock>Please enter your {this.props.t('phone')}</HelpBlock>*/}
            </FormGroup>
            <FormGroup
              controlId="company">
              <FormControl
                type="text"
                placeholder={this.props.t('company')}
                value={this.props.store.deliveryAddressStore.address.company}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeCompany(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup
              controlId="floor">
              <FormControl
                type="number"
                placeholder={this.props.t('floor')}
                value={this.props.store.deliveryAddressStore.address.floor}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeFloor(e.target.value);
                }}
              />
            </FormGroup>
            <FormGroup
              controlId="massage">
              <FormControl
                type="text"
                placeholder={this.props.t('massage')}
                value={this.props.store.deliveryAddressStore.address.massage}
                onChange={(e) => {
                  this.props.store.deliveryAddressStore.changeMassage(e.target.value);
                }}
              />
            </FormGroup>
          </div>
          <Button
            block
            disabled={!this.props.store.deliveryAddressStore.isFullAddressEntered}
            bsStyle="success"
            type="submit"
            onClick={this._onFormSubmit.bind(this)}>
            {this.props.t('checkout')}
          </Button>
          <Button
            block
            className="light-grey-btn"
            onClick={this._handleCancel.bind(this)}>
            {this.props.t('back')}
          </Button>
        </div>
      </form>
    );
  }
}
  // newRender() {
  //   return (
  //     <Form onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
  //       {/*<MyOwnInput name="email" validations="isEmail" validationError="This is not a valid email" required/>*/}
  //       <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
  //     </Form>
  //   )
  // }
  //
  // render() {
  //   return this.newRender();
  // }
// }
