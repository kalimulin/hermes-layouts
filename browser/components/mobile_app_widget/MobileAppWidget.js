import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

// CSS
import './MobileAppWidget.scss'

// Assets
const assets = {
  android_app_de: require('../../assets/images/app-widget/android-app-de.jpg')
};

@withRouter
@inject("store")
@observer
export default class MobileAppWidgetComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  render() {
    return (
      <div id="mobile-app-widget">
        <a href={this.props.store.globalStore.baseSettings.appstore_url} target="blank">
          <img src={assets.android_app_de}/>
        </a>
      </div>
    );
  }
}
