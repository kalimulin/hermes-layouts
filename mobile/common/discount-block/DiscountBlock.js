import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './discountBlock.style';

export default class DiscountBlockComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>10% Rabatt</Text>
      </View>
    )
  }
}
