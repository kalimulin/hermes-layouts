import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Route} from 'react-router-native'
import Drawer from 'react-native-drawer'

// Components
import MyControlPanel from '../common/sidebar/Sidebar'

// States
import HomeState from './states/home/Home'


export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      drawerType: 'overlay',
      openDrawerOffset: 100,
      closedDrawerOffset: 0,
      panOpenMask: .1,
      panCloseMask: .9,
      relativeDrag: false,
      panThreshold: .25,
      tweenHandlerOn: false,
      tweenDuration: 350,
      tweenEasing: 'linear',
      disabled: false,
      tweenHandlerPreset: null,
      acceptDoubleTap: false,
      acceptTap: false,
      acceptPan: true,
      tapToClose: false,
      negotiatePan: false,
      side: "top",
    };
  }

  setDrawerType(type) {
    this.setState({
      drawerType: type
    })
  }

  tweenHandler(ratio) {
    if(!this.state.tweenHandlerPreset) {
      return {}
    }
    return [this.state.tweenHandlerPreset](ratio);
    // return tweens[this.state.tweenHandlerPreset](ratio);
  }

  noopChange() {
    this.setState({
      changeVal: Math.random()
    })
  }

  openDrawer() {
    this.drawer.open()
  }

  setStateFrag(frag) {
    this.setState(frag);
  }

  render() {
    var controlPanel = <MyControlPanel closeDrawer={() => {
      this.drawer.close();
    }} />

    return (
      <Drawer
        open={false}
        type="static"
        content={controlPanel}
        openDrawerOffset={100}
        styles={drawerStyles}
        tweenHandler={this.tweenHandler.bind(this)}
      >
        <Route exact path="/" component={HomeState}/>
        {/*<HomeState*/}
          {/*openDrawer={this.openDrawer.bind(this)}*/}
          {/*setParentState={this.setStateFrag.bind(this)}*/}
          {/*{...this.state}*/}
        {/*/>*/}
      </Drawer>
    )
  }
}


const drawerStyles = {
  drawer: {shadowColor: '#000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
};
