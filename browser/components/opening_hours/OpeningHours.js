import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {translate} from 'react-i18next'
import {observer, inject} from 'mobx-react'

// CSS
import './OpeningHours.scss'


@withRouter
@translate(["opening_hours"])
@inject("store")
@observer
export default class OpeningHoursComponent extends Component {
  static propTypes = {};
  static defaultProps = {};

  componentWillMount() {
    this.props.store.openingHoursStore.loadOpeningHours(this.props.store.openingHoursStore.days);
  }

  render() {
    const newarr = this.props.store.openingHoursStore.openingHours;
    return (
      <div className="opening-hours-component white-block">
        <div className="title">
          <i className="fa fa-clock-o"/>{this.props.t('openingHours')}
        </div>
        {newarr.map((item, index) => {
          if (item.startMoment) {
            if (item.breakStartMoment) {
              return <div key={index}>
                {this.props.t(item.daysstr)}: {item.startMoment} {this.props.t('until')} {item.breakStartMoment} {this.props.t('and')} {item.breakEndMoment} {this.props.t('until')} {item.endMoment}
              </div>
            } else {
              return <div key={index}>
                {this.props.t(item.daysstr)}: {item.startMoment} {this.props.t('until')} {item.endMoment}
              </div>
            }
          } else {
            return <div key={index}>
              {this.props.t(item.daysstr)}: {this.props.t('closed')}
            </div>
          }
        })}
      </div>
    );
  }
}
