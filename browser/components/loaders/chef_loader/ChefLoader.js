import React, {Component} from 'react'

// CSS
import './ChefLoader.scss'

// Assets
const assets = {
  loading: require('../../../assets/images/loading.gif')
};


export default class ChefLoaderComponent extends Component {
  render() {
    return (
      <div id="chef-loader">
        <img className="chef" src={assets.loading}/>
      </div>
    );
  }
}
