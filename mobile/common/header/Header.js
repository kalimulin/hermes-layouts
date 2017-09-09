import React, {Component} from 'react';
import {View} from 'react-native';

import PhoneAndMenu from '../phone-and-menu/PhoneAndMenu';
import Title from '../title/Title';
import LogoAndInfo from '../logo-and-info/LogoAndInfo';
import DiscountBlock from '../discount-block/DiscountBlock'
import WeAreClosedMessage from '../we-are-closed-message/WeAreClosedMessage'


import styles from './header.style';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View>
        <PhoneAndMenu/>
        {/*<WeAreClosedMessage/>*/}
        <Title/>
        <LogoAndInfo/>
        {/*<DiscountBlock/>*/}
      </View>
    )
  }
}
