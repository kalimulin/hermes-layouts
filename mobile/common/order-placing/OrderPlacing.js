import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Br
} from 'react-native';

import styles from './OrderPlacing.style';


export default class OrderPlacingComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.cartTitle}>
          <Text style={styles.cartTitleText}>
            Vielen Dank
          </Text>
        </View>
        <View style={styles.orderLoader}>
          <Text style={styles.loaderText}>
            Deine Bestellung wird übermittelt!
          </Text>
          <Image style={styles.imgLoad}
            source={require('../../assets/android/loading.gif')}
          />
        </View>
        <View style={styles.hr}/>
        <View style={styles.textWrapper}>
          <Text>
            <Text style={styles.textHeader}>
              Fragen zur Bestellung?
            </Text>
            {"\n"}
            {"\n"}
            Bei Fragen zur Bestellung, Lieferzeit oder den Produkten wende Dich bitte an:
            {"\n"}
            {"\n"}
            Pizza-Taxi ViaViale
            Südring 18
            D-56412 Ruppach-Goldhause
            {"\n"}
            {"\n"}
            Tel:
            <Text style={styles.boldText}> 07231 / 41 95 123</Text>
          </Text>
        </View>
      </View>
    )
  }
}
