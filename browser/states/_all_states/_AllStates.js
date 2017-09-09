import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

// Config
import states from '../../states'

// CSS
import './_AllStates.scss'

// Utils
import {generateLinkFor} from '../../../utils/routing'


@withRouter
export default class _AppStatesComponent extends Component {
  render() {
    return (
      <div id="all-states">
        <div className="row">
          <h4>States:</h4>
          <Link to={generateLinkFor(states.app, this.props, {
            view: states.subStates.view.basket,
            modal: null
          })}>Base</Link>
          <Link to={generateLinkFor(states.maintenanceMode, this.props)}>Maintenance-mode</Link>
          <Link to={generateLinkFor(states.enterCompanyCode, this.props)}>Enter-company-code</Link>
        </div>
        <div className="row">
          <h4>Modal States:</h4>
          <Link to={generateLinkFor(states.app, this.props, {
            modal: states.subStates.modal.extras,
            product: 58
          })}>Extras Modal</Link>
          <Link to={generateLinkFor(states.app, this.props, {
            modal: states.subStates.modal.storeIsClosed
          })}>Store is closed</Link>
          <Link to={generateLinkFor(states.app, this.props, {
            modal: states.subStates.modal.preorderPossible
          })}>Preorder possible</Link>
          <Link to={generateLinkFor(states.app, this.props, {
            modal: states.subStates.modal.enterAddress
          })}>Enter address</Link>
          <Link to={generateLinkFor(states.app, this.props, {
            modal: states.subStates.modal.offer
          })}>Offer</Link>
        </div>
        <div className="row">
          <h4>View States:</h4>
          <Link to={generateLinkFor(states.app, this.props, {
            view: states.subStates.view.orderPaymentMethods
          })}>Order Payment Methods</Link>
          <Link to={generateLinkFor(states.app, this.props, {
            view: states.subStates.view.basket
          })}>Basket</Link>
          <Link to={generateLinkFor(states.app, this.props, {
            view: states.subStates.view.deliveryAddress
          })}>Delivery Address</Link>
        </div>
      </div>
    );
  }
}
