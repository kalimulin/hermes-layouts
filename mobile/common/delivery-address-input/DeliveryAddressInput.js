import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

import styles from './deliveryAddressInput.style';


export default class DeliveryAddressInputComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <TextInput
          placeholder={this.props.placeholder}
          underlineColorAndroid={this.getStyles(this.props.inputstatus).underlineColorAndroid}
          //placeholderTextColor={this.getStyles(this.props.inputstatus).placeholderTextColor}
          style={{color: this.getStyles(this.props.inputstatus).color}}
        />
        <Text style={styles.errortext}>{this.props.errortext}</Text>
      </View>
    )
  }
  // за код не пинай, сделал на скорую руку, чтобы разные состояния протестировать
  getStyles(inputStatus) {
    if (inputStatus === 'error') {
      return {
        color: '#df241f',
        underlineColorAndroid: '#df241f',
        placeholderTextColor: '#df241f',
      }
    } else if (inputStatus === 'success') {
      return {
        color: '#adcf00',
        underlineColorAndroid: '#adcf00',
        placeholderTextColor: '#adcf00',
      }
    } else {
      return {
        color: '#ccc',
        underlineColorAndroid: '#ccc',
        placeholderTextColor: '#ccc',
      }
    }
  }
}
