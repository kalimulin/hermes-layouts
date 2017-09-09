import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

import ShoppingCartItem from '../shopping-cart-item/ShoppingCartItem'

import styles from './shoppingCart.style';


export default class ShoppingCartComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.cartTitle}>
          <Text style={styles.cartTitleText}>
            Warenkorb
          </Text>
        </View>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>
            Bestellung zur Lieferung
          </Text>
        </View>
        <View>
          <ShoppingCartItem/>
          <ShoppingCartItem/>
        </View>
        <View style={styles.hr}/>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Bestellwert</Text>
          <Text style={styles.orderText}>13,60 €</Text>
        </View>
        <View style={styles.discountRow}>
          <Text style={styles.discountText}>Rabatt (35%)</Text>
          <Text style={styles.discountText}>- 4,76 €</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Liefergebühr</Text>
          <Text style={styles.orderText}>+ 1,50 €</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Gesamtbetrag</Text>
          <Text style={styles.totalText}>10,34 €</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Zur Bestellung (1/3)"/>
        </View>
        <View style={styles.footer}>
          {/*<Image*/}
            {/*source={require('../../assets/android/shopping-cart/paysystems.png')}*/}
          {/*/>*/}
          <Text>
            Alle Preise inklusive USt.
          </Text>
          <Text>
            Druckfehler, Irrtümer und Änderungen vorbehalten.
          </Text>
        </View>
      </View>
    )
  }
}
