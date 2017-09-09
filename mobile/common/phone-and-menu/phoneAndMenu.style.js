import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 31,
    paddingRight: 31,
  },
  wrapperText: {
    fontFamily: 'roboto-regular',
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000'
  },
  hamburgerBtn: {
    width: 18,
    height: 18,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
  hamburgerBtnChild: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#000'
  }
});
