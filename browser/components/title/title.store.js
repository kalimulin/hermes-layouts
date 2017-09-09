import {observable} from 'mobx'
import {defaultLanguage} from '../../../config'
import languages from '../../../data/languages'


export class TitleStore {
  constructor(api) {
    this.api = api;
  }


  languages = languages;
  @observable activeLanguage = this.languages.find(i => i.key === defaultLanguage);


  changeLanguage(key) {
    console.info('changeLanguage', key);
    this.activeLanguage = this.languages.find(i => i.key === key);
  }
}
