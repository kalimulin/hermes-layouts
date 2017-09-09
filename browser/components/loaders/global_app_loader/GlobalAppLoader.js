import React, {Component} from 'react'
import {translate} from 'react-i18next'

// Bootstrap
// import ProgressBar from 'react-bootstrap/es/ProgressBar'

// CSS
import './GlobalAppLoader.scss'


@translate()
export default class GlobalAppLoaderComponent extends Component {
  render() {
    return (
      <div id="global-app-loader">
        {/*<ProgressBar style={{width: 100}} active/>*/}
        <h1>{this.props.t('loading')}</h1>
      </div>
    );
  }
}
