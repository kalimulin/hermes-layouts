import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './title.style';


export default class TitleComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>
          Pizza-Taxi Viaviale Frankfurt
        </Text>
      </View>
    )
  }
}
