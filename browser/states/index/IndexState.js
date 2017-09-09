import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {observer, inject} from 'mobx-react'

// Utils
import {generateLinkFor} from '../../../utils/routing'

// Config
import states from '../../states'


@inject("store")
@withRouter
@observer
export default class IndexComponent extends Component {
  componentWillMount() {
    const slug = this.props.match.params.slug;
    return this.props.store.globalStore
      .getTokenBySlug(slug)
      .then(() => this.props.store.maintenanceModeModalStore.getMd5Checksum())
      .then((data) => {
        if (data.maintenance && this.props.store.maintenanceModeModalStore.loadAddress()) {
          return this.props.history.push(generateLinkFor(states.maintenanceMode, this.props));
        }
        return this._loadAllData();
      })
      .catch((err) => {
        console.error(err);
        this.props.store.globalStore.toggleError(true);
        alert(err.eTitle);
      })
      .finally(() => {
        this.props.store.globalStore.toggleLoading(false);
      });
  }

  _loadAllData() {
    // TODO: Alex, avoid code copy-paste
    return this.props.store.globalStore
      .getBaseData()
      .then((baseData) => {
        return Promise.props({
          checkTimeBoth: this.props.store.globalStore.getCheckTimeBoth(),
          settings: this.props.store.globalStore.getSettings(),
          branches: this.props.store.globalStore.getBranches()
        }).then((obj) => {
          obj.baseData = baseData;
          const orderType = this.props.store.deliveryAddressStore.generateOrderTypes(obj.settings.data.orderTypes);
          this.props.store.deliveryAddressStore.loadAddress();
          this.props.store.basketStore.changeParams(obj.baseData.d.branch);
          this.props.store.openingHoursStore.calculateOpeningHours(
            orderType === 'delivery' ? obj.baseData.d.branch.deliveryHours : obj.baseData.d.branch.openingHours,
            obj.baseData.d.branch.restaurant_time
          );
          this.props.store.basketStore.loadBasketFromLocalStorage();
          const state = this.props.store.globalStore.buildStateBasedOnSettings(this.props);
          console.info('state', state);
          this.props.history.push(state);
          return obj;
        });
      });
  }

  render() {
    return null;
  }
}
