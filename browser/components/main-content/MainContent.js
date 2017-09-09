import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

//Components
import CategoryView from '../../components/products_view/ProductsView'

// CSS
import './MainContent.scss'

// Utils
import queryString from 'query-string'

@withRouter
@inject("store")
@observer
export default class MainContentComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  render() {
    const params = queryString.parse(this.props.location.search);
    return (
      <div className="white-block" id="main-content">
        <CategoryView category={params.category}/>
      </div>
    );
  }
}
