import {conditionPromise} from '../config';

import 'core-js/fn/array/find';
import 'core-js/fn/object/assign';
import 'core-js/fn/object/keys';
import Promise from 'bluebird/js/browser/bluebird.core';

Promise.config({
  longStackTraces: conditionPromise,
  warnings: conditionPromise
});
window.Promise = Promise;
