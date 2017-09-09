import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import DeliveryAddressInput from '../delivery-address-input/DeliveryAddressInput';

import styles from './deliveryAddress.style';


export default class DeliveryAddressComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.orderTotalRow}>
          <Text style={styles.orderTotalText}>
            Bestellung Gesamtbetrag
          </Text>
          <Text style={styles.orderTotalText}>
            10,34 €
          </Text>
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Lieferadresse
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <DeliveryAddressInput placeholder="Nachname"/>
          <DeliveryAddressInput placeholder="Nachname"  inputstatus="success"/>
          <DeliveryAddressInput placeholder="Straße" inputstatus="error" errortext="Bitte gib deine Straße ein"/>
          <DeliveryAddressInput placeholder="Nr." />
          <DeliveryAddressInput placeholder="E-Mail-Adresse" />
          <DeliveryAddressInput placeholder="Telefon" />
          <DeliveryAddressInput placeholder="Firma (optional)" />
          <DeliveryAddressInput placeholder="Etage (optional)" />
          <DeliveryAddressInput placeholder="Besonderheiten (optional)" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Zur Kasse (2/3)"/>
        </View>
      </View>
    )
  }
}
