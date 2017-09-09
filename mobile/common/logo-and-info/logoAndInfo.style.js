import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 17,
    paddingBottom: 17,
  },
  deliveryText: {
    fontFamily: 'roboto-regular',
    fontSize: 12,
    color: '#000'
  },
  workingHoursTitle: {
    color: '#000',
    fontSize: 12,
    // fontFamily: 'OpenSans',
    fontWeight: 'bold'
  },
  workingHoursText: {
    color: '#000',
    fontSize: 12,
    // fontFamily: 'OpenSans',
  },
  logo: {
    width: 189,
    height: 54
  }
});
