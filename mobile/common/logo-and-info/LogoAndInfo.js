import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import styles from './logoAndInfo.style';


export default class LogoAndInfoComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          source={require('../../assets/android/logo-and-info/logo.png')}
          style={styles.logo}
        />
        <View>
          <Text style={styles.deliveryText}>17:00 - 18:00</Text>
          <Text style={styles.deliveryText}>Liefergebühr 1,50 €</Text>
          <Text style={styles.deliveryText}>Mindestbestellwert 8,50 €</Text>
        </View>
        <View>
          <Text style={styles.workingHoursTitle}>Öffnungszeiten</Text>
          <Text style={styles.workingHoursText}>Mo.-Sa. 11:00 bis 14:00 Uhr und 17:00 bis 23:00 Uhr</Text>
          <Text style={styles.workingHoursText}>Sonn- und Feiertags 16:00 bis 22:00 Uhr</Text>
          <Text style={styles.workingHoursText}>Dienstag Ruhetag</Text>
        </View>
      </View>
    )
  }
}
