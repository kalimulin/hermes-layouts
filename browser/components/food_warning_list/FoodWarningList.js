import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Col from 'react-bootstrap/es/Col'

// CSS
import './FoodWarningList.scss'


@withRouter
@translate(["food_warning_list"])
@inject("store")
@observer
export default class FoodWarningListComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  render() {
    return (
      <div id="food-warning-list">
        <div className="title">{this.props.t('title')}</div>
        <Row>
          <Col xs={3}>
            <ol type="1">
              <li>{this.props.t('containsGlutenContainingProducts')}</li>
              <li>{this.props.t('containsCrustaceansProducts')}</li>
              <li>{this.props.t('containsEggProducts')}</li>
              <li>{this.props.t('containsFishProducts')}</li>
              <li>{this.props.t('containsPeanutsProducts')}</li>
              <li>{this.props.t('containsSoyBeansProducts')}</li>
              <li>{this.props.t('containsMilkProducts')}</li>
              <li>{this.props.t('containsFruitNutsProducts')}</li>
              <li>{this.props.t('containsSeleryProducts')}</li>
              <li>{this.props.t('containsMustardProducts')}</li>
              <li>{this.props.t('containsSesameSeedsProducts')}</li>
              <li>{this.props.t('containsSulphurDioxideSulphites')}</li>
              <li>{this.props.t('containsLupineMinkProducts')}</li>
              <li>{this.props.t('containsSoftAnimalsProducts')}</li>
            </ol>
          </Col>
          <Col xs={3}>
            <p>{this.props.t('FICAllergens')}</p>
            <ol type="A">
              <li>{this.props.t('withSweeteners')}</li>
              <li>{this.props.t('withSugarsAndSweeteners')}</li>
              <li>{this.props.t('containsAspartame')}</li>
              <li>{this.props.t('mayInteractWithLaxative')}</li>
              <li>{this.props.t('containsLiquorice')}</li>
              <li>{this.props.t('highCaffeineContent')}</li>
              <li>{this.props.t('containsCaffeine')}</li>
            </ol>
          </Col>
          <Col xs={3}>
            <p>{this.props.t('additives')}</p>
            <ol type="A" start="8">
              <li>{this.props.t('withDye')}</li>
              <li>{this.props.t('withPreservative')}</li>
              <li>{this.props.t('withTheSodiumNitrite')}</li>
              <li>{this.props.t('WithNitrate')}</li>
              <li>{this.props.t('withSodiumNitriteAndNitrate')}</li>
              <li>{this.props.t('withAntiOxidant')}</li>
              <li>{this.props.t('withFlavorEnhancers')}</li>
              <li>{this.props.t('blackened')}</li>
              <li>{this.props.t('waxed')}</li>
            </ol>
          </Col>
          <Col xs={3}>
            <ol type="A" start="14">
              <li>{this.props.t('withFlavorEnhancers')}</li>
              <li>{this.props.t('blackened')}</li>
              <li>{this.props.t('waxed')}</li>
              <li>{this.props.t('withPhosphate')}</li>
              <li>{this.props.t('sulfites')}</li>
              <li>{this.props.t('acidifier')}</li>
              <li>{this.props.t('stabilizers')}</li>
            </ol>
          </Col>
        </Row>
        <div className="detail-list">
          <a href={this.props.store.globalStore.baseSettings.branch.url_AD}>{this.props.t('detailedListLink')}</a>
        </div>
      </div>
    );
  }
}
