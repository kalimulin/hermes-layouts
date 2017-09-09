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
      <img id="lang-flag" src={assets[this.props.language.key]}/>
      <div className="list-title">{this.props.language.name}</div>
    </div>
  }
}


export default class DesktopView extends Component {
  _handleLanguageChange(key) {
    this.props.store.titleStore.changeLanguage(key);
    this.props.i18n.changeLanguage(this.props.store.titleStore.activeLanguage.key);
  }

  render() {
    const phoneNumber = this.props.store.globalStore.baseSettings.branch.tel;
    return (
      <Col xsHidden={true} smHidden={true} md={12} className="white-block" id="title-component">
        {phoneNumber ? <Phone phone={phoneNumber}/> : null}
        {/*<NavDropdown*/}
          {/*eventKey="4"*/}
          {/*title={*/}
            {/*<div className="select-link">*/}
              {/*<div className="list-title">{this.props.t('branchTitle')}</div>*/}
            {/*</div>*/}
          {/*}*/}
          {/*id="branch-select">*/}
          {/*{<Label/>}*/}
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

        <NavDropdown
          eventKey="4"
          title={<SelectedLanguage language={this.props.store.titleStore.activeLanguage}/>}
          id="lang-select">
          {this.props.store.titleStore.languages.map((item) => {
            return <MenuItem
              onSelect={this._handleLanguageChange.bind(this)}
              key={item.key}
              className="language"
              eventKey={item.key}>
              <span><img src={assets[item.key]}/></span>{item.name}
            </MenuItem>
          })}
        </NavDropdown>
      </Col>
    );
  }
}
