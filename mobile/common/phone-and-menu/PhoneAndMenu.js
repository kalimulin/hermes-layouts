import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './phoneAndMenu.style';

export default class PhoneAndMenuComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>
          07231 / 41 95 123
        </Text>
        <View style={styles.hamburgerBtn}>
          <View style={styles.hamburgerBtnChild} />
          <View style={styles.hamburgerBtnChild} />
          <View style={styles.hamburgerBtnChild} />
        </View>
      </View>
    )
  }
}
