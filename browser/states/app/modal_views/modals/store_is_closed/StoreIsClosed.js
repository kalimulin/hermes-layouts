import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// CSS
import './StoreIsClosed.scss'

// Config
import states from '../../../../../states'

// Utils
import {generateLinkFor} from '../../../../../../utils/routing'


@withRouter
@translate(["store_is_closed_modal"])
@inject("store")
@observer
export default class StoreIsClosedModalComponent extends Component {
  render() {
    return (
      <div id="store-is-closed-modal-state">
        <h1>{this.props.t('header')}</h1>
        <p>{`${this.props.t('message')} 8 ${this.props.t('hours')} 15 ${this.props.t('minutes')}`}</p>
        <Link to={generateLinkFor(states.app, this.props, {modal: null})}>
          <button
            className="btn btn-default light-grey-btn">
            {this.props.t('viewMenu')}
          </button>
        </Link>
      </div>
    );
  }
}
