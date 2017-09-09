import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// Bootstrap
import Row from 'react-bootstrap/es/Row'

// Components
import Mobile from './_Mobile'
import Desktop from './_Desktop'

// CSS
import './Title.scss'


@withRouter
@translate(["title"])
@inject("store")
@observer
export default class TitleComponent extends Component {
  static propTypes = {};
  static defaultProps = {};


  _renderData() {
    return (
      <div id="title-container">
        <Row>
          <Mobile {...this.props}/>
          <Desktop {...this.props}/>
        </Row>
      </div>
    );
  }

  render() {
    return this.props.store.categoryMenuStore.isCategoriesEmpty ? null : this._renderData();
  }
}
