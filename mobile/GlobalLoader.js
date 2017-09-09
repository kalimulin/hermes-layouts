import React, {Component} from 'react'
import {Font} from 'expo'
import IOSApp from './ios/index'
import AndroidApp from './android/index'
import {inject, observer} from 'mobx-react/native'


@inject("store")
@observer
export default class GlobalLoader extends Component {
  componentDidMount() {
    return Font.loadAsync({
      'roboto-regular': require('roboto-fontface/fonts/Roboto/Roboto-Regular.ttf')
    }).then(() => {
      this.props.store.globalStore.toggleLoading(false);
    });
  }

  render() {
    const app = <AndroidApp/>;
    return this.props.store.globalStore.loading ? null : app;
  }
}
