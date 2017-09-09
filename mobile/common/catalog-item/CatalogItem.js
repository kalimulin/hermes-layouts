import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './catalogItem.style';

export default class CatalogItemComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.product}>
          <Text style={styles.productTitle}>
            Italienischer Salat Spezial
          </Text>
          <Text style={styles.jkzpi}>
            1,2,3,4,5,J,K,Z,P,I
          </Text>
          <Text style={styles.productDescription}>
            mit Sardellen, Kapern, Zwiebeln und Oliven und Sandstein
          </Text>
        </View>
        <View style={styles.addToCart}>
          <Text style={styles.addToCartButton}>+</Text>
          <Text style={styles.productPrice}>13,00 €</Text>
        </View>
      </View>
    )
  }
}
