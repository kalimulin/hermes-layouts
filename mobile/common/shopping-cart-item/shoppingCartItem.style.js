import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 0
  },
  header: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 7,
    paddingBottom: 7,
    marginBottom: 0,
    backgroundColor: '#2aabd2'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'roboto-regular',
    color: '#fff',
  },
  product: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
  },
  productNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 18,
    lineHeight: 24,
    color: '#000',
  },
  productCount: {
    fontSize: 18,
    color: '#777',
    fontWeight: 'bold',
    marginLeft: 100
  },
  productOptions: {
    paddingLeft: 40
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
    fontSize: 18,
    color: '#000'
  }
});
