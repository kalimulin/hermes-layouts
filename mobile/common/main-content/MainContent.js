import React, {Component} from 'react';
import {
  View,
  ScrollView
} from 'react-native';

import CatalogSection from '../catalog-section/CatalogSection';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import DeliveryAddress from '../delivery-address/DeliveryAddress';
import OrderPlacing from '../order-placing/OrderPlacing';
import Checkout from '../checkout/Checkout';

import styles from './mainContent.style';


export default class MainContentComponent extends Component {
  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <CatalogSection/>
        {/*<ShoppingCart/>*/}
        {/*<DeliveryAddress/>*/}
        {/*<OrderPlacing/>*/}
        {/*<Checkout/>*/}
      </ScrollView>
    )
  }
}
