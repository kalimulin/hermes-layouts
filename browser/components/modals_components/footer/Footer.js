import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Components
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'
import Button from 'react-bootstrap/es/Button'
import Modal from 'react-bootstrap/es/Modal'

// CSS
import './Footer.scss'


@withRouter
@translate(["modal_footer_common"])
@inject("store")
@observer
export default class FooterComponent extends Component {
  static propTypes = {
    abort: PropTypes.func.isRequired,
    confirm: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    confirmText: PropTypes.string
  };
  static defaultProps = {
    disabled: false
  };


  render() {
    const confirmText = this.props.confirmText || this.props.t('confirm');
    return (
      <Modal.Footer id="modal-footer-common">
        <Row>
          <Col xs={6} className="text-left">
            <Button
              bsSize='large'
              className="light-grey-btn"
              onClick={this.props.abort}
            >{this.props.t('abort')}</Button>
          </Col>
          <Col xs={6} className="text-right">
            <Button
              type="submit"
              bsSize='large'
              className="light-grey-btn confirm"
              disabled={this.props.disabled}
              onClick={this.props.confirm}
            >{confirmText}</Button>
          </Col>
        </Row>
      </Modal.Footer>
    );
  }
}
