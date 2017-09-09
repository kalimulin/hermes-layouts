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
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eceeef',
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
  sectionTitleText: {
    color: '#595968',
    fontSize: 18,
    fontFamily: 'roboto-regular'
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 10
  },
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  orderText: {
    fontSize: 18,
    color: '#000',
    paddingLeft: 30,
    paddingRight: 30,
  },
  discountRow: {
    backgroundColor: '#eb5635',
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8
  },
  discountText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10
  },
  totalText: {
    fontSize: 18,
    color: '#000',
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: 'bold'
  },
  buttonContainer: {
    margin: 30
  },
  footer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 120,
    marginTop: 40
  },
  footerText: {
    fontSize: 14,
    color: '#818a91'
  }
});
