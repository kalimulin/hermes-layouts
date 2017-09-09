import React, {Component} from 'react'
import PropTypes from 'prop-types'


// Needs to be in the separate React class to avoid warning
export default class Label extends Component {
  static propTypes = {
    phone: PropTypes.string
  };
  static defaultProps = {};


  render() {
    return this.props.phone ?
      <div className="phone-title">
        <div className="phonenumber"><i className="fa fa-phone"/>{this.props.phone}</div>
      </div> :
      null;
  }
}
