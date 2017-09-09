import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  wrapper: {
    alignItems: 'stretch',
  },
  orderTotalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10
  },
  orderTotalText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
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
  orderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  inputsContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonContainer: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    marginBottom: 30,
  },
});
