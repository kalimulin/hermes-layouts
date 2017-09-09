import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Grid from 'react-bootstrap/es/Grid'
import Col from 'react-bootstrap/es/Col'

// CSS
import './ShoppingCartPanel.scss'

// Config
import states from '../../states'

// Utils
import {generateLinkFor} from '../../../utils/routing'
import {filters} from '../../../utils/filters'

// Assets
// const assets = {
//   google_play_app: require('../../assets/images/footer/google-play-app.png'),
//   app_store_app: require('../../assets/images/footer/app-store-app.png')
// };


@withRouter
@translate(["basket"])
@inject("store")
@observer
export default class ShoppingCartPanelComponent extends Component {
  static propTypes = {};
  static defaultProps = {};

  handleToShoppingCart() {
    console.log('-------', 'to shopping cart handle');
    // const state = generateLinkFor(states.app, this.props, {
    //   view: states.subStates.view.deliveryAddress
    // });
    // this.props.history.push(state);
  }


  render() {
    return (

      <div className="hidden-md hidden-lg" id="shopping-cart-panel" onClick={this.props.handleToShoppingCart}>
          <Link to={generateLinkFor(states.app, this.props, {
            view: states.subStates.view.shoppingCartMobile
          })}>
            <Grid>
              <Row>
                <Col xs={6}>
                  Warenkorb
                </Col>
                <Col xs={6} className="text-right">
                  {filters.filterPrice(this.props.store.basketStore.totalPrice)} €
                </Col>
              </Row>
            </Grid>
          </Link>
      </div>

    );
  }
}
