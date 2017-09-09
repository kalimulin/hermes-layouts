import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    alignItems: 'stretch',
  },
  title: {
    backgroundColor: '#595968',
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
  titleText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold'
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingRight: 30,
    paddingBottom: 10,
    paddingLeft: 30,
  },
  sectionTitleText: {
    color: '#000',
    fontSize: 17,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold'
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
    fontSize: 14,
    color: '#000',
    paddingLeft: 30,
    paddingRight: 30,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5
  },
  totalText: {
    fontSize: 18,
    color: '#000',
    paddingLeft: 30,
    paddingRight: 30,
    fontWeight: 'bold'
  },
  paymentMethod: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    paddingBottom: 20
  },
  paymentMethodTitle: {
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold'
  },
  buttonContainer: {
    margin: 30
  },
  href: {
    color: 'blue'
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loadingText: {
    marginLeft: 10
  }
})
