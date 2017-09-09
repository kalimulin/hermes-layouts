import './polyfills'
import {AppContainer} from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import store from '../stores'
import {BrowserRouter as Router, Route} from 'react-router-dom/es'
import {I18nextProvider} from 'react-i18next'
import i18n from '../i18n.browser'

// Config
import states from './states'

// Fonts
import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss'
import 'npm-font-open-sans/open-sans.scss'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/scss/font-awesome.scss'
import './app.scss'

// States
import Index from './states/index/IndexState'
import App from './states/app/AppState'
import EnterCompanyCode from './states/enter_company_code/EnterCompanyCodeState'

// State Modals
import MaintenanceModeModal from './states/maintenance_mode_modal/MaintenanceModeModal'


const render = () => {
  return ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppContainer>
          <Router>
            <div className="app-wrapper">
              <Route path="/:slug" component={Index}/>
              <Route path={`/:slug/${states.app}`} component={App}/>
              <Route path={`/:slug/${states.enterCompanyCode}`} component={EnterCompanyCode}/>
              <Route exact path={`/:slug/${states.maintenanceMode}`} component={MaintenanceModeModal}/>
            </div>
          </Router>
        </AppContainer>
      </I18nextProvider>
    </Provider>,
    document.getElementById('app')
  );
};
render();

if(module.hot) {
  module.hot.accept();
}
