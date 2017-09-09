import {conditionDevTools} from '../../../config'
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'
// import DevTool from 'mobx-react-devtools'

// Bootstrap
import Row from 'react-bootstrap/es/Row'
import Grid from 'react-bootstrap/es/Grid'
import Col from 'react-bootstrap/es/Col'

// Components
import AllStates from '../../states/_all_states/_AllStates'
import GlobalAppLoader from '../../components/loaders/global_app_loader/GlobalAppLoader'
import Title from '../../components/title/Title'
import CategoryMenu from '../../components/category_menu/CategoryMenu'
import ShoppingCartPanel from '../../components/shopping-cart-panel/ShoppingCartPanel'
// import SubcategoryMenu from '../../components/subcategory_menu/SubcategoryMenu'
import DeliveryInfo from '../../components/delivery_info/DeliveryInfo'
import OpeningHours from '../../components/opening_hours/OpeningHours'
import CategoryView from '../../components/products_view/ProductsView'
import FoodWarningList from '../../components/food_warning_list/FoodWarningList'
import MobileAppWidget from '../../components/mobile_app_widget/MobileAppWidget'
import Footer from '../../components/footer/Footer'

// States
import RightSideView from './home/Home'

// Modal states
import ModalView from './modal_views/ModalView'

// Utils
import queryString from 'query-string'

// CSS
import './App.scss'


@inject("store")
@withRouter
@observer
export default class AppState extends Component {
  _renderData() {
    const params = queryString.parse(this.props.location.search);
    console.info('Query params', params);
    return (
      <Grid fluid={true} id="index-wrapper">
        <ModalView {...params}/>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8} className="left-block">
              <Title/>
              <Col>
                <CategoryMenu {...params}/>
              </Col>
              {/*<SubcategoryMenu subcategory={params.subcategory}/>*/}
              <div className="white-block" id="main-content">
                <CategoryView {...params}/>
              </div>
            </Col>
            <Col xsHidden={true} smHidden={true} md={4} className="right-block">
              <OpeningHours/>
              <div id="right-column" className="white-block">
                <DeliveryInfo/>
                <RightSideView {...params}/>
                <MobileAppWidget/>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mobile-home-state" xs={12} mdHidden={true} lgHidden={true}>
              <RightSideView {...params}/>
            </Col>
            <Col xsHidden={true} smHidden={true} md={12}>
              <FoodWarningList/>
              <Footer/>
            </Col>
          </Row>
        </Grid>
        <ShoppingCartPanel/>
        {conditionDevTools ? null : <AllStates/>}
        {/*{conditionDevTools ? null : <DevTool/>}*/}
      </Grid>
    );
  }

  render() {
    return this.props.store.globalStore.loading ? <GlobalAppLoader/> : this._renderData();
  }
}
