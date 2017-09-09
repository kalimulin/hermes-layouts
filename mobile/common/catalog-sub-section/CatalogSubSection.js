import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

import styles from './catalogSubSection.style';
import CatalogItemComponent from "../catalog-item/CatalogItem";


export default class CatalogSubSectionComponent extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View
          style={styles.sectionTitleImageContainer}
        >
          <Image
            style={styles.sectionTitleImage}
            source={require('../../assets/android/catalog-sub-category/pizza.jpg')}
          />
        </View>
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>
            Pizza // Besonderheiten
          </Text>
          <Text style={styles.sectionSubTitleText}>
            mit Tomaten und Käse extra knusprig im original Steinofen gebacken
          </Text>
        </View>
        <View>
          <CatalogItemComponent/>
          <CatalogItemComponent/>
          <CatalogItemComponent/>
          <CatalogItemComponent/>
        </View>
      </View>
    )
  }
}
