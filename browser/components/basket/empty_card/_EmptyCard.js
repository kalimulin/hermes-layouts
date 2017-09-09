import React, {Component} from 'react'

// Assets
const assets = {
  chef: require('../../../assets/images/basket/chef.png')
};

//Bootstrap
import Col from 'react-bootstrap/es/Col'

// CSS
import './_EmptyCard.scss'

export default class EmptyCard extends Component {
  render() {
    return (
      <div id="empty-basket">
        <img className="chef" src={assets.chef}/>
        <div className="title">{this.props.t('cartIsEmpty')}</div>
        <hr/>
        <div className="total">
          <Col xsHidden={true} smHidden={true} md={12} lg={12} className="discount">
            <div className="item-container">
              <div className="item">
                <i className="fa fa-certificate"/>{this.props.store.basketStore.preparePercentage}% {this.props.t('discount')}
              </div>
            </div>
          </Col>
          <div className="sum">
            <div>
              <div className="item">
                {this.props.t('total')}
              </div>
            </div>
            <div>
              {this.props.store.basketStore.totalPrice} €
            </div>
          </div>
        </div>
      </div>
    );
  }
}
