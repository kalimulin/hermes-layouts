import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Picker,
  Linking,
  Button,
  ActivityIndicator
} from 'react-native'

import CheckoutCartItem from '../checkout-cart-item/CheckoutCartItem';

import styles from './checkout.style';

export default class CheckoutComponent extends Component{
  state = {
    paymentMethod: 'cash',
  };

  updatePaymentMethod = (paymentMethod) => {
    this.setState({ paymentMethod: paymentMethod })
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Bestellen</Text>
        </View>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>
            Dein Warenkorb
          </Text>
        </View>
        <View>
          <CheckoutCartItem/>
          <CheckoutCartItem/>
          <CheckoutCartItem/>
        </View>
        <View style={styles.hr}/>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Bestellwert</Text>
          <Text style={styles.orderText}>9,00 €</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Rabatt (35%)</Text>
          <Text style={styles.orderText}>-3,15 €</Text>
        </View>
        <View style={styles.orderRow}>
          <Text style={styles.orderText}>Liefergebühr</Text>
          <Text style={styles.orderText}>1,50 €</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Gesamtbetrag</Text>
          <Text style={styles.totalText}>10,34 €</Text>
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.paymentMethodTitle}>
            Zahlungsart wählen
          </Text>
          <Picker selectedValue = {this.state.paymentMethod} onValueChange = {this.updatePaymentMethod}>
            <Picker.Item label="Barzahlung" value="cash" />
            <Picker.Item label="PayPal" value="paypal" />
            <Picker.Item label="Sofortüberweisung" value="sofortuberweisung" />
            <Picker.Item label="Kreditkarte" value="creditcard" />
            <Picker.Item label="Paydirekt" value="paydirekt" />
          </Picker>
          <Text>
            Bei einer Onlinebestellung geht der Besteller einen Vertrag mit dem jeweiligen Betreiber des Online-Shops
            innerhalb des Bestellsystems der app smart GmbH ein. Es gelten dessen&nbsp;
            <Text style={styles.href}
                  onPress={() => Linking.openURL('http://google.com')}>
              {/* тут наверное нужна ссылка на внутреннюю страницу, но поскльку ее пока нет, сделал на гугл */}
              Allgemeine Geschäftsbedingungen
            </Text>
            .
          </Text>
          <View style={styles.buttonContainer}>
            <Button title="Zahlungspflichtig bestellen für 7,35 €"/>
          </View>
          <View style={styles.loading}>
            <ActivityIndicator/>
            <Text style={styles.loadingText}>Einen Moment bitte …</Text>
          </View>
        </View>
      </View>
    )
  }
}
