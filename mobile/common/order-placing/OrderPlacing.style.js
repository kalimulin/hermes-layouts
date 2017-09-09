import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'stretch',
  },
  cartTitle: {
    backgroundColor: '#595968',
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
  cartTitleText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold'
  },
  orderLoader: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 15,
  },
  loaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'roboto-regular',
  },
  imgLoad: {
    marginTop: -15,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  hr: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  textWrapper: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  }
});
