import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from './weAreClosedMessage.style';

export default class WeAreClosedMessageComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.wrapperText}>Aktuell haben wir geschlossen. Probier es später noch einmal.</Text>
      </View>
    )
  }
}
