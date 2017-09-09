import React, {Component} from 'react'
import PropTypes from 'prop-types'

// Bootstrap
import MenuItem from 'react-bootstrap/es/MenuItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Col from 'react-bootstrap/es/Col'

// Components
import Label from './_Label'
import Phone from './_Phone'

// CSS
import './Title.scss'

// Assets
const assets = {
  de: require('../../assets/images/title/flags/de.png'),
  en: require('../../assets/images/title/flags/en.png'),
  ru: require('../../assets/images/title/flags/ru.png')
};

// Utils
import {generateLinkFor} from '../../../utils/routing'

// Config
import states from '../../states'


class SelectedLanguage extends Component {
  static propTypes = {
    language: PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  };
  static defaultProps = {};

  render() {
    return <div className="select-link">
      <img id="mobile-lang-flag" src={assets[this.props.language.key]}/>
      <div className="list-title">{this.props.language.name}</div>
    </div>
  }
}


export default class MobileView extends Component {
  _handleLanguageChange(key) {
    this.props.store.titleStore.changeLanguage(key);
    this.props.i18n.changeLanguage(this.props.store.titleStore.activeLanguage.key);
  }

  render() {
    const phoneNumber = this.props.store.globalStore.baseSettings.branch.tel;
    return (
      <Col xs={12} mdHidden={true} lgHidden={true} id="title-component-mobile">
        <div id="mobile-phone-and-menu">
          {phoneNumber ? <Phone phone={phoneNumber}/> : null}
          {/*<NavDropdown*/}
            {/*eventKey="4"*/}
            {/*noCaret*/}
            {/*title={<SelectedLanguage language={this.props.store.titleStore.activeLanguage}/>}*/}
            {/*id="mobile-lang-select">*/}
            {/*{this.props.store.titleStore.languages.map((item) => {*/}
              {/*return <MenuItem*/}
                {/*onSelect={this._handleLanguageChange.bind(this)}*/}
                {/*key={item.key}*/}
                {/*className="mobile-language"*/}
                {/*eventKey={item.key}>*/}
                {/*<span><img className="dropdown-flag" src={assets[item.key]}/></span>{item.name}*/}
              {/*</MenuItem>*/}
            {/*})}*/}
          {/*</NavDropdown>*/}
          {/*<NavDropdown*/}
            {/*noCaret*/}
            {/*className="menu-wrapper"*/}
            {/*eventKey="4"*/}
            {/*title={*/}
              {/*<i className="fa fa-bars"/>*/}
            {/*}*/}
            {/*id="lang-select">*/}
            {/*{this.props.store.categoryMenuStore.categories.map((category, index) => {*/}
              {/*return <MenuItem*/}
                {/*key={index}*/}
                {/*className={this.props.category == category.id ? "category active" : "category"}*/}
                {/*onClick={() => {*/}
                  {/*this.props.history.push(generateLinkFor(states.app, this.props, {category: category.id}))*/}
                {/*}}>*/}
                {/*<span className="name">{category.name}</span>*/}
              {/*</MenuItem>*/}
            {/*})}*/}
          {/*</NavDropdown>*/}
        </div>
        <div id="mobile-branch-title">
          <div id="mobile-branch-title-text">
            {this.props.t('branchTitle')}
          </div>
          {/*<NavDropdown*/}
            {/*noCaret*/}
            {/*eventKey="4"*/}
            {/*title={*/}
            {/*}*/}
            {/*id="branch-select">*/}
            {/*<Label/>*/}
            {/*<MenuItem className="address" eventKey="1.2">*/}
              {/*App Smart GmbH <br/>*/}
              {/*Joachim Wegmann Abraham-Lincoln-Str. 7 <br/>*/}
              {/*65189 Wiesbaden*/}
            {/*</MenuItem>*/}
            {/*<MenuItem className="address" eventKey="1.3">*/}
              {/*Joachim Wegmann Wilhelmstr. 12 <br/>*/}
              {/*65203 Wiesbaden*/}
            {/*</MenuItem>*/}
            {/*<MenuItem className="address" eventKey="1.4">*/}
              {/*App Smart GmbH <br/>*/}
              {/*Matthias Thom Abraham-Lincoln-Str. 7 <br/>*/}
              {/*65189 Wiesbaden*/}
            {/*</MenuItem>*/}
          {/*</NavDropdown>*/}
        </div>
      </Col>
    );
  }
}
