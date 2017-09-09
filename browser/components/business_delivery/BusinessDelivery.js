import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Button from 'react-bootstrap/es/Button'
import Col from 'react-bootstrap/es/Col'

// CSS
import './BusinessDelivery.scss'

// Assets
const assets = {
  business_delivery_icon: require('../../assets/images/business-delivery/business-delivery-icon.png'),
  business_delivery: require('../../assets/images/business-delivery/business-delivery.png')
};


@withRouter
@translate(["business_delivery"])
@inject("store")
@observer
export default class BusinessDeliveryComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  render() {
    return (
      <div id="business-delivery-component">
        <div className="heading-blue">
          <img src={assets.business_delivery_icon} alt=""/>
          <div>{this.props.t('heading')}</div>
        </div>
        <div id="business-delivery">
          <Row>
            <Col xs={4}>
              <img src={assets.business_delivery} alt="" className="img-responsive business-delivery"/>
            </Col>
            <Col xs={8} className="text-center">
              <h2 className="text-center">{this.props.t('alreadyRegistered')}</h2>
              <Button bsStyle="success" block>
                <i className="fa fa-users"/>
                {this.props.t('enterCompanyCode')}
              </Button>
            </Col>
          </Row>
          <p className="not-have-code">{this.props.t('notHaveCode')}</p>
          <div className="bottom-text">
            {this.props.t('allPricesInclVAT')}.<br/>
            {this.props.t('printingErrorsMistakesChangesReserved')}
          </div>
        </div>
      </div>
    );
  }
}
