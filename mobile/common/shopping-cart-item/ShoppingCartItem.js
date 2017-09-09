import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './shoppingCartItem.style';

export default class ShoppingCartItemComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Boxname</Text>
        </View>
        <View style={styles.product}>
          <View style={styles.productNameRow}>
            <Text style={styles.productName}>Döner Sandwich mit extra Fleisch und viel scharf</Text>
            <View>
              <Text style={styles.productCount}>1</Text>
            </View>
          </View>
          <View style={styles.productOptions}>
            <View style={styles.productPriceRow}>
              <Text style={styles.productPriceName}>Preis</Text>
              <View>
                <Text style={styles.productPriceName}>4,00 €</Text>
              </View>
            </View>
            <View style={styles.productOptionRow}>
              <Text style={styles.productOptionName}>+ Knoblauch</Text>
              <View>
                <Text style={styles.productPrice}>+ 0,90 €</Text>
              </View>
            </View>
            <View style={styles.productOptionRow}>
              <Text style={styles.productOptionName}>+ Hackfleisch</Text>
              <View>
                <Text style={styles.productPrice}>+ 1,50 €</Text>
              </View>
            </View>
            <View style={styles.productOptionRow}>
              <Text style={styles.productOptionName}>+ Mais</Text>
              <View>
                <Text style={styles.productPrice}>+ 0,40 €</Text>
              </View>
            </View>
          </View>
          <Text style={styles.endPrice}>6,80 €</Text>
        </View>
      </View>

    )
  }
}
