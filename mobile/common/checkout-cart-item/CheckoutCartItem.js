import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './checkoutCartItem.style';

export default class CheckoutCartItemComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.product}>
          <View style={styles.productNameRow}>
            <Text style={styles.productName}>Döner Sandwich mit extra Fleisch und viel scharf</Text>
          </View>
          <View style={styles.productOptions}>
            <View style={styles.productOptionRow}>
              <Text style={styles.productOptionName}>+ Knoblauch, + Hackfleisch, + Mais</Text>
              <View>
                <Text style={styles.productPrice}>+ 4,00 €</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

    )
  }
}
