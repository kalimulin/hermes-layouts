import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Modal from 'react-bootstrap/es/Modal'
import FormGroup from 'react-bootstrap/es/FormGroup'
import FormControl from 'react-bootstrap/es/FormControl'

// Components
import GlobalAppLoader from '../../components/loaders/global_app_loader/GlobalAppLoader'
import ModalFooter from '../../components/modals_components/footer/Footer'

// Utils
import {generateLinkFor} from '../../../utils/routing'
import states from '../../states'

// CSS
import './EnterCompanyCodeState.scss'


@inject("store")
@withRouter
@observer
export default class EnterCompanyCodeComponent extends Component {
  _abort() {
    const state = generateLinkFor(states.app, this.props, {modal: null});
    this.props.history.push(state);
  }

  _confirm() {
    const state = generateLinkFor(states.app, this.props, {modal: null});
    this.props.history.push(state);
  }

  _renderData() {
    // TODO: need to translate text?
    return (
      <Modal id="enter-company-code-wrapper" show={true} onHide={this._abort.bind(this)}>
        <Modal.Header>
          <h2><i className="fa fa-shopping-cart"/>Please enter your Company Code</h2>
        </Modal.Header>
        <Modal.Body>
          <p>
            Sie besitzen einen Company Code? Einfach hier in diesem Feld eingeben.
            Danach legen Sie Speisen in Ihren Warenkorb. Der Inhalt des Warenkorbs
            wird dann einer Sammelnbestellung hinzugefügt und zu einem von Ihrem
            Arbeitgeber vorher festgelegten Zeitpunkt automatisch ausgeführt.
          </p>
          <FormGroup controlId="formBasicText">
            <FormControl
              type="text"
              placeholder="Company code"
              onChange={(e) => {
                this.props.store.enterCompanyCodeStore.changeCompanyCode(e.target.value);
              }}
            />
          </FormGroup>
          <ModalFooter
            abort={this._abort.bind(this)}
            confirm={this._confirm.bind(this)}
            disabled={!this.props.store.enterCompanyCodeStore.isCompanyCodeEntered}
          />
        </Modal.Body>
      </Modal>
    );
  }

  render() {
    return this.props.store.userStore.loading ? <GlobalAppLoader/> : this._renderData();
  }
}
