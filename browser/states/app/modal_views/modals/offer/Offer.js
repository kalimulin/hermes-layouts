import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Modal from 'react-bootstrap/es/Modal'
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'
import Button from 'react-bootstrap/es/Button'
import Accordion from 'react-bootstrap/es/Accordion'
import Panel from 'react-bootstrap/es/Panel'

// Components
import ModalFooter from '../../../../../components/modals_components/footer/Footer'

// Utils
import {generateLinkFor} from '../../../../../../utils/routing'
import states from '../../../../../states'

// CSS
import './Offer.scss'


@withRouter
@translate(["offer_modal"])
@inject("store")
@observer
export default class OfferComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  _abort() {
    const state = generateLinkFor(states.app, this.props, {modal: null});
    console.info('Going to state', state);
    this.props.history.push(state);
  }

  _confirm() {
    const state = generateLinkFor(states.app, this.props, {modal: null});
    this.props.history.push(state);
  }

  render() {
    return (
      <div className="offer-modal-state">
        <Modal.Header>
          <div className="flex space-between">
            <h2>{this.props.t('header')}</h2>
            <Button className="btn btn-success">{this.props.t('next')} (6,49 €)</Button>
          </div>
          <div className="offer-text">
            {this.props.t('offer')}

          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="offer-step-1">
            <h3>Please choose your Pizza (Needed)</h3>
            <ul className="offer-product-list">
              <li className="offer-product-item">
                <Row>
                  <Col xs={8}>
                    <div className="product-name">Pizza Mista</div>
                    <div className="product-text">
                      mit Sardellen, Kapern, Zwiebeln und Oliven
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Button className="btn btn-default light-grey-btn btn-block">Select</Button>
                  </Col>
                </Row>
              </li>
              <li className="offer-product-item">
                <Row>
                  <Col xs={8}>
                    <div className="product-name">Pizza Mista</div>
                    <div className="product-text">
                      mit Sardellen, Kapern, Zwiebeln und Oliven
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Button className="btn btn-default light-grey-btn btn-block">Select</Button>
                  </Col>
                </Row>
              </li>
              <li className="offer-product-item">
                <Row>
                  <Col xs={8}>
                    <div className="product-name">Pizza Mista</div>
                    <div className="product-text">
                      mit Sardellen, Kapern, Zwiebeln und Oliven
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Button className="btn btn-default light-grey-btn btn-block">Select</Button>
                  </Col>
                </Row>
              </li>
            </ul>
          </div>
          <div className="offer-step-2">
            <h3>Pizza Mista</h3>
            <Accordion>
              <Panel header={<h4><i className="fa fa-chevron-right fa-rotate-90"/>{this.props.t('withCheese')} (0)</h4>} eventKey="1" className="pointer" collapsible={false} defaultExpanded={true}>
                <Button className="light-grey-btn extra">
                  <i className="fa fa-plus"/><p>{this.props.t('crunchyCheese')} (2,50 €)</p>
                </Button>
              </Panel>
              <Panel header={<h4><i className="fa fa-chevron-right fa-rotate-90"/>{this.props.t('bottom')} (1/1)</h4>} eventKey="2" className="pointer" collapsible={false} defaultExpanded={true}>
                <Button className="dark-grey-btn extra">
                  <i className="fa fa-minus"/><p>{this.props.t('otherwiseCheese')} (2,50 €) </p>
                </Button>
                <Button className="light-grey-btn extra">
                  <i className="fa fa-plus"/><p>{this.props.t('crunchyCheese')} (2,50 €)</p>
                </Button>
                <Button className="light-grey-btn extra">
                  <i className="fa fa-plus"/><p>{this.props.t('crunchyCheese')}(2,50 €)</p>
                </Button>
                <Button className="light-grey-btn extra">
                  <i className="fa fa-plus"/><p>{this.props.t('crunchyCheese')} (2,50 €)</p>
                </Button>
              </Panel>
              <Panel className="unselected pointer" header={<h4><i className="fa fa-chevron-right"/>Pflichtzutat (0/1)</h4>} eventKey="3">
                <Button className="light-grey-btn extra">
                  <i className="fa fa-plus"/><p>{this.props.t('crunchyCheese')} (2,50 €)</p>
                </Button>
              </Panel>
              <Panel header={<h4><i className="fa fa-chevron-right"/> {this.props.t('extraIngredients')} (0)</h4>} className="pointer" eventKey="4">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
                lomo. Leggings occaecat craft beer farm-to-table.
              </Panel>
            </Accordion>
          </div>
          <div className="offer-step-3">
            <h3 className="green-label"><i className="fa fa-check "/> Pizza Mista</h3>
            <h3>Please choose your Pizza (Needed)</h3>
            <ul className="offer-product-list">
              <li className="offer-product-item">
                <Row>
                  <Col xs={8}>
                    <div className="product-name">Pizza Mista</div>
                    <div className="product-text">
                      mit Sardellen, Kapern, Zwiebeln und Oliven
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Button className="btn btn-default light-grey-btn btn-block">Select</Button>
                  </Col>
                </Row>
              </li>
              <li className="offer-product-item">
                <Row>
                  <Col xs={8}>
                    <div className="product-name">Pizza Mista</div>
                    <div className="product-text">
                      mit Sardellen, Kapern, Zwiebeln und Oliven
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Button className="btn btn-default dark-grey-btn btn-block">Select</Button>
                  </Col>
                </Row>
              </li>
              <li className="offer-product-item">
                <Row>
                  <Col xs={8}>
                    <div className="product-name">Pizza Mista</div>
                    <div className="product-text">
                      mit Sardellen, Kapern, Zwiebeln und Oliven
                    </div>
                  </Col>
                  <Col xs={4}>
                    <Button className="btn btn-default light-grey-btn btn-block">Select</Button>
                  </Col>
                </Row>
              </li>
            </ul>
          </div>
          <div className="offer-step-4">
            <h3 className="green-label"><i className="fa fa-check "/> Pizza Mista</h3>
            <h3 className="green-label"><i className="fa fa-check "/> Please choose your Pizza (Needed)</h3>
            <Accordion>
              <Panel header={<h4><i className="fa fa-chevron-right fa-rotate-90"/>{this.props.t('withCheese')} (0)</h4>} eventKey="1" className="pointer" collapsible={false} defaultExpanded={true}>
                <Col sm={4}>
                  <Button className="btn btn-default dark-grey-btn btn-block">Yoghurt</Button>
                </Col>
                <Col sm={4}>
                  <Button className="btn btn-default light-grey-btn btn-block">Caesars Dressing</Button>
                </Col>
                <Col sm={4}>
                  <Button className="btn btn-default light-grey-btn btn-block">French Dressing</Button>
                </Col>
              </Panel>
            </Accordion>
          </div>
        </Modal.Body>
        <ModalFooter
          abort={this._abort.bind(this)}
          confirm={this._confirm.bind(this)}
          disabled={false}
        />
      </div>
    );
  }
}
