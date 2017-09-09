import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Grid from 'react-bootstrap/es/Grid'
import Col from 'react-bootstrap/es/Col'

// CSS
import './Footer.scss'

// Assets
const assets = {
  google_play_app: require('../../assets/images/footer/google-play-app.png'),
  app_store_app: require('../../assets/images/footer/app-store-app.png')
};


@withRouter
@translate(["footer"])
@inject("store")
@observer
export default class FooterComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  render() {
    return (
      <Col id="footer">
        <Grid>
          <Row>
            <Col xsHidden={true} sm={4} md={4} lg={3}>
              <p className="title">{this.props.t('useOurApp')}</p>
              <div className="mobile-app">
                <a href={this.props.store.globalStore.baseSettings.playstore_url} target="blank">
                  <img className="img-responsive" src={assets.google_play_app}/>
                </a>
              </div>
              <div className="mobile-app">
                <a href={this.props.store.globalStore.baseSettings.appstore_url} target="blank">
                  <img className="img-responsive" src={assets.app_store_app}/>
                </a>
              </div>
            </Col>
            <Col xsHidden={true} sm={4} md={4} lg={3}>
              <p className="title">{this.props.t('information')}</p>
              <ul className="nav">
                <li><a href={this.props.store.globalStore.baseSettings.branch.url_FB}>{this.props.t('becomeFan')}</a></li>
                {/*<li><a href="#">{this.props.t('conditions')}</a></li>*/}
                <li><a href={this.props.store.globalStore.baseSettings.branch.url_AD}>{this.props.t('zusatztoffe')}</a></li>
                {/*<li><a href="#">{this.props.t('contacts')}</a></li>*/}
              </ul>
            </Col>
            <Col xsHidden={true} sm={4} md={4} lg={3}>
              <p className="title">{this.props.t('legalInfo')}</p>
              <p>{this.props.t('storeName')}<br/>
                {this.props.store.globalStore.baseSettings.branch.street} {this.props.store.globalStore.baseSettings.branch.street_no}<br/>
                {this.props.t('address2')}</p>
              <p>{this.props.t('owner')} {this.props.store.globalStore.baseSettings.branch.ownername}<br/>
                {this.props.t('managing')}<br/>
                {this.props.t('taxNumber')} {this.props.store.globalStore.baseSettings.branch.fax}</p>
            </Col>
          </Row>
        </Grid>
      </Col>
    );
  }
}
