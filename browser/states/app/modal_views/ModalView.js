import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Modal from 'react-bootstrap/es/Modal'

// Config
import states from '../../../states'

// Utils
// import {generateLinkFor} from '../../../../utils/routing'

// Modals
import EnterAddress from './modals/enter_address/EnterAddress'
import Extras from './modals/extras/Extras'
import StoreIsClosed from './modals/store_is_closed/StoreIsClosed'
import PreorderPossible from './modals/preorder_possible/PreorderPossible'
import Offer from './modals/offer/Offer'


@withRouter
@inject("store")
@observer
export default class ModalViewComponent extends Component {
  static propTypes = {
    modal: PropTypes.string,
    product: PropTypes.string
  };
  static defaultProps = {};


  _closeModal() {
    // const state = generateLinkFor(states.app, this.props, {modal: null, product: null});
    // console.info('Modal closed. Go to state - ', state);
    // this.props.history.push(state);
  }

  _getSubState() {
    console.info(`Rendering modal - ${this.props.modal}`);
    switch(this.props.modal) {
      case states.subStates.modal.enterAddress:
        return <EnterAddress {...this.props}/>;
      case states.subStates.modal.extras:
        return <Extras {...this.props}/>;
      case states.subStates.modal.offer:
        return <Offer {...this.props}/>;
      case states.subStates.modal.storeIsClosed:
        return <StoreIsClosed {...this.props}/>;
      case states.subStates.modal.preorderPossible:
        return <PreorderPossible {...this.props}/>;
      default:
        return null;
    }
  }

  _renderModal() {
    return (
      <Modal id="modal-view" show={true} onHide={this._closeModal.bind(this)}>
        <Modal.Body>
          {this._getSubState()}
        </Modal.Body>
      </Modal>
    );
  }

  render() {
    return this.props.modal ? this._renderModal() : null;
  }
}
