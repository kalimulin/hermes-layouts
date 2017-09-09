import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './cartBlock.style';


export default class CartBlockComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>
          Warenkorb
        </Text>
        <Text style={styles.wrapperText}>
          7,90 €
        </Text>
      </View>
    )
  }
}
