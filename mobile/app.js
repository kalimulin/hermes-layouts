import {registerRootComponent} from 'expo'
import React, {Component} from 'react'
import {Provider} from 'mobx-react/native'
import {I18nextProvider} from 'react-i18next'
import {NativeRouter} from 'react-router-native'
import store from '../stores'
import i18n from '../i18n.mobile'

// Components
import GlobalLoader from './GlobalLoader'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <NativeRouter>
            <GlobalLoader/>
          </NativeRouter>
        </I18nextProvider>
      </Provider>
    );
  }
}


registerRootComponent(App);
