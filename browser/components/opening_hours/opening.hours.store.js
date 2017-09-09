import {observable} from 'mobx'
import _ from 'lodash'
import moment from 'moment'


export class OpeningHoursStore {
  constructor(api) {
    this.api = api;
  }


  @observable days = [];


  calculateOpeningHours(arr = []) {
    console.info(arr);
    this.reset();
    arr.forEach((i) => {
      i.start = (i.start);
      i.end= (i.end);
      i.break_start = (i.break_start);
      i.break_end = (i.break_end);
    });
    this.days = arr;
  }

  loadOpeningHours(days = [], openhours = []) {
    days.map((item) => {
      openhours.push({
        day: item.day || '',
        start: item.start || '',
        end: item.end || '',
        break_start: item.break_start || '',
        break_end: item.break_end || ''
      });
    });
    let openhoursarr = _.groupBy(openhours, function (item) {
      return `${item.start} ${item.end} ${item.break_start} ${item.break_end}`;
    });
    let newarr = [];
    _.forEach(openhoursarr, function (item) {
      item.daysstr = '';
      item.map(function (day) {
        item.daysstr += `${moment().day(day.day).format('dddd')}, `;
      });
      item.daysstr = item.daysstr.slice(0, -2);
      item.startMoment = item[0].start ? moment(item[0].start, 'HH:mm:ss').format('HH:mm') : '';
      item.endMoment = item[0].end ? moment(item[0].end, 'HH:mm:ss').format('HH:mm') : '';
      item.breakStartMoment = item[0].break_start ? moment(item[0].break_start, 'HH:mm:ss').format('HH:mm') : '';
      item.breakEndMoment = item[0].break_end ? moment(item[0].break_end, 'HH:mm:ss').format('HH:mm') : '';
      newarr[_.minBy(item, 'day').day] = item;
    });
    this.openingHours = newarr;
  }

  reset() {
    this.days = [];
  }
}
