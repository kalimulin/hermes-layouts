import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#ffffff',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  jkzpi: {
    fontSize: 9,
    color: '#777',
  },
  productDescription: {
    fontSize: 7,
    fontWeight: '600',
    color: '#777'
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    borderRadius: 4,
    maxHeight: 29,
    paddingTop: 2,
    paddingBottom: 2,
    width: 97
  },
  addToCartButton: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 24,
    lineHeight: 26,
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderRightColor: 'rgba(55, 58, 60, 0.39)',
    color: '#373a3c'
  },
  productPrice: {
    fontSize: 12,
    color: '#373a3c',
    paddingLeft: 10,
    paddingRight: 10
  },
});
