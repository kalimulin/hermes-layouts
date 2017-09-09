import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {find as _find} from 'lodash'

// Bootstrap
import Button from 'react-bootstrap/es/Button'
import Col from 'react-bootstrap/es/Col'

// Assets
const assets = {
  cash: require('../../../assets/images/paysystem/cash.png'),
  mastercard: require('../../../assets/images/paysystem/mastercard.png'),
  paydirect: require('../../../assets/images/paysystem/paydirect.png'),
  paypal: require('../../../assets/images/paysystem/paypal.png'),
  sofort: require('../../../assets/images/paysystem/sofort.png'),
  visa: require('../../../assets/images/paysystem/visa.png'),
};


export default class ToOrderComponent extends Component {
  static propTypes = {
    handleToOrder: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  };
  static defaultProps = {
    disabled: false
  };


  findInPayMethods(payMethodId) {
    // TODO: Rustam, should be in store
    return _find(this.props.payMethods, { 'id': payMethodId.toString()});
  }

  render() {
    return (
      <div id="to-order-component">
        <div className="button-container">
          <Button
            block
            bsStyle="success"
            disabled={this.props.disabled}
            onClick={this.props.handleToOrder.bind(this)}>
            {this.props.t('toOrder')}
          </Button>
        </div>
        <Col smHidden={true} className="paysystem-images">
          {/* TODO: need to add images for paysystems */}
          {this.findInPayMethods(1) ? <img src={assets.cash}/> : null}
          {this.findInPayMethods(2) ? <img src={assets.mastercard}/> : null}
          {this.findInPayMethods(3) ? <img src={assets.cash}/> : null}
          {this.findInPayMethods(4) ? <img src={assets.cash}/> : null}
          {this.findInPayMethods(5) ? <img src={assets.paypal}/> : null}
          {this.findInPayMethods(6) ? <img src={assets.visa}/> : null}

        </Col>
        <div className="bottom-text">
          {this.props.t('allPricesInclVAT')}.<br/>
          {this.props.t('printingErrorsMistakesChangesReserved')}
        </div>
      </div>
    );
  }
}
