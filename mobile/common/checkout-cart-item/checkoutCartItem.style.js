import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 0
  },
  product: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 0,
    paddingBottom: 5,
  },
  productNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 14,
    lineHeight: 24,
    color: '#000',
    paddingRight: 65
  },
  productPrice: {
    fontSize: 14,
    color: '#000',
  },
  productOptions: {
    paddingLeft: 30
  },
  productPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productPriceName: {
    fontSize: 14,
    color: '#777',
    fontWeight: 'bold'
  },
  productOptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productOptionName: {
    fontSize: 14,
    color: '#777',
  },
  endPrice: {
    textAlign: 'right',
    fontSize: 14,
    color: '#000'
  }
});
