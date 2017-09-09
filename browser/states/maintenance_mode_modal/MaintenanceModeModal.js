import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Modal from 'react-bootstrap/es/Modal'
import FormGroup from 'react-bootstrap/es/FormGroup'
import FormControl from 'react-bootstrap/es/FormControl'
import HelpBlock from 'react-bootstrap/es/HelpBlock'
import Button from 'react-bootstrap/es/Button'
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'

// Components
import GlobalAppLoader from '../../components/loaders/global_app_loader/GlobalAppLoader'

// Utils
import {generateLinkFor} from '../../../utils/routing'
import states from '../../states'

// CSS
import './MaintenanceModeModal.scss'

// Assets
const assets = {
  logo: require('../../assets/images/maintenance-mode-modal/logo.png')
  // order_smart: require('../../assets/images/maintenance-mode-modal/order-smart.png')
};


@translate(["maintenance_mode"])
@inject("store")
@withRouter
@observer
export default class MaintenanceModeModalState extends Component {
  componentWillUnmount() {
    this.props.store.maintenanceModeModalStore.handlePasswordChanged('');
  }

  _loadAllData() {
    // TODO: Alex, avoid code copy-paste
    return this.props.store.globalStore
      .getBaseData()
      .then((baseData) => {
        return Promise.props({
          checkTimeBoth: this.props.store.globalStore.getCheckTimeBoth(),
          settings: this.props.store.globalStore.getSettings(),
          branches: this.props.store.globalStore.getBranches()
        }).then((obj) => {
          obj.baseData = baseData;
          const orderType = this.props.store.deliveryAddressStore.generateOrderTypes(obj.settings.data.orderTypes);
          this.props.store.deliveryAddressStore.loadAddress();
          this.props.store.basketStore.changeParams(obj.baseData.d.branch);
          this.props.store.openingHoursStore.calculateOpeningHours(
            orderType === 'delivery' ? obj.baseData.d.branch.deliveryHours : obj.baseData.d.branch.openingHours,
            obj.baseData.d.branch.restaurant_time
          );
          this.props.store.basketStore.loadBasketFromLocalStorage();
          const state = this.props.store.globalStore.buildStateBasedOnSettings(this.props);
          console.info('state', state);
          this.props.history.push(state);
          return obj;
        });
      });
  }

  _confirm(e) {
    e.preventDefault();
    return this.props.store.maintenanceModeModalStore
      .validatePasswordRemote()
      .then(() => {
        this.props.store.maintenanceModeModalStore.saveMaintenance();
        this._loadAllData();
      })
      .catch((err) => {
        console.error(err);
        this.props.store.maintenanceModeModalStore.toggleInvalidPasswordError(true);
      })
      .finally(() => {
        this.props.store.maintenanceModeModalStore.toggleInvalidPasswordError(false);
        this.props.store.maintenanceModeModalStore.toggleLoading(false);
      });
  }

  _abort() {
    const state = generateLinkFor(states.app, this.props, {modal: null});
    this.props.history.push(state);
  }

  _renderData() {
    return (
      <Modal id="maintenance-mode-modal-state" show={true} onHide={this._abort.bind(this)}>
        <Modal.Header>
          <Row>
            <Col xs={6}>
              <img src={assets.logo}/>
            </Col>
            <Col xs={6} className="text-right">
              {/*<img src={assets.order_smart}*/}
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <form>
            <h4>{this.props.t('header')}</h4>
            <Row>
              <Col xs={8}>
                <FormGroup
                  controlId="maintenanceModeFormPassword"
                  validationState={this.props.store.maintenanceModeModalStore.validatePassword}>
                  <FormControl
                    autoFocus
                    type="password"
                    placeholder={this.props.t('passwordPlaceholder')}
                    value={this.props.store.maintenanceModeModalStore.password}
                    onChange={e => this.props.store.maintenanceModeModalStore.handlePasswordChanged(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col xs={4}>
                <Button
                  className="btn btn-block btn-default"
                  type="submit"
                  disabled={this.props.store.maintenanceModeModalStore.isPasswordEmpty}
                  onClick={this._confirm.bind(this)}>
                  {this.props.t('enter')}
                </Button>
              </Col>
            </Row>
            <div className="help-block">
              {
                this.props.store.maintenanceModeModalStore.invalidPasswordError ?
                  <HelpBlock>{this.props.t('errorIncorrectPassword')}</HelpBlock> :
                  null
              }
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  }

  render() {
    return this.props.store.maintenanceModeModalStore.loading ? <GlobalAppLoader/> : this._renderData();
  }
}
