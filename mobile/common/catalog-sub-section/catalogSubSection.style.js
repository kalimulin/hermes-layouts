import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  wrapper: {
    alignItems: 'stretch',
  },
  sectionTitle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: 140,
  },
  sectionTitleText: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'roboto-regular',
    fontWeight: 'bold',
    paddingLeft: 31,
    paddingRight: 60,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#fff',
    minWidth: 200
  },
  sectionSubTitleText: {
    color: '#000',
    fontSize: 7,
    // fontFamily: 'open-sans',
    paddingLeft: 31,
    paddingRight: 31,
    paddingTop: 3,
    paddingBottom: 3,
    backgroundColor: '#eceeef',
    width: 465
  },
  sectionTitleImageContainer: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    // flex: 1,
    // height: '100%',
    // alignItems: 'stretch'
  },
  sectionTitleImage: {
    // flex: 1,
    // width: '100%',
    // height: '100%',
    // maxHeight: 140
  }
});
