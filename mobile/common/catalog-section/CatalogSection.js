import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import CatalogSubSection from '../catalog-sub-section/CatalogSubSection'

import styles from './catalogSection.style';


export default class CatalogSectionComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>
            Pizza - Klassiker & Spezial
          </Text>
        </View>
        <View>
          <CatalogSubSection/>
          <CatalogSubSection/>
          <CatalogSubSection/>
        </View>
      </View>
    )
  }
}
