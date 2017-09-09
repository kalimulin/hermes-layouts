import React, {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// CSS
import './PreorderPossible.scss'

// Config
import states from '../../../../../states'

// Utils
import {generateLinkFor} from '../../../../../../utils/routing'


@withRouter
@translate(["preorder_possible_modal"])
@inject("store")
@observer
export default class PreorderPossibleModalComponent extends Component {
  render() {
    return (
      <div id="preorder-possible-modal-state">
        <h1>{this.props.t('header')}</h1>
        <p>{this.props.t('message')}</p>
        <Link to={generateLinkFor(states.app, this.props, {modal: null})}>
          <button
            className="btn btn-default light-grey-btn">
            {this.props.t('preorder')}
          </button>
        </Link>
      </div>
    );
  }
}
