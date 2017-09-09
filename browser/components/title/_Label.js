import React, {Component} from 'react'
import PropTypes from 'prop-types'


// Needs to be in the separate React class to avoid warning
export default class Label extends Component {
  static propTypes = {
    active: PropTypes.string
  };

  render() {
    return (
      <div className="list-tip">Please choose an address:</div>
    );
  }
}
