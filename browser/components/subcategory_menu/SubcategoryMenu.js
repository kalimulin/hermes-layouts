import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

// Components
import GlobalAppLoader from '../loaders/global_app_loader/GlobalAppLoader'

// CSS
import './SubcategoryMenu.scss'


@inject("store")
@withRouter
@observer
export default class SubcategoryMenuComponent extends Component {
  static propTypes = {
    subcategory: PropTypes.string
  };
  static defaultProps = {};


  componentWillMount() {
    // this.props.store.subcategoryMenuStore.getSubcategories();
  }

  _renderData() {
    return (
      <h5>API not implemented for subcategories yet</h5>
    );
  }

  render() {
    return (
      <div id="subcategory-menu-component" className="white-block">
        {this.props.store.subcategoryMenuStore.loading ? <GlobalAppLoader/> : this._renderData()}
      </div>
    )
  }
}
