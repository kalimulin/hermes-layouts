import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'
import Button from 'react-bootstrap/es/Button'
import FormGroup from 'react-bootstrap/es/FormGroup'
import FormControl from 'react-bootstrap/es/FormControl'

// CSS
import './CompanyCodeSearch.scss'


@withRouter
@translate(["company_code_search"])
@inject("store")
@observer
export default class CompanyCodeSearchComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  render() {
    return (
      <div id="company-code-search">
        <Row>
          <Col xs={12}>
            <h1>{this.props.t('enterCompanyCode')}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormGroup controlId="companyCode">
              <FormControl
                type="text"
                placeholder={this.props.t('companyCode')}
              />
            </FormGroup>
          </Col>
          <Col xs={6}>
            <Button onClick={() => {alert('In development')}}>{this.props.t('search')}</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
