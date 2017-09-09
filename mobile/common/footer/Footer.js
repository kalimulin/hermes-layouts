import React, {Component} from 'react';
import {
  View,
} from 'react-native';

import CartBlock from '../cart-block/CartBlock'

import styles from './footer.style';


export default class FooterComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <CartBlock/>
      </View>
    )
  }
}
