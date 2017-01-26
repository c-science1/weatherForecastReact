import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

let _appList = {};

const CHANGE_EVENT = 'change';
let AppStore = Object.assign({}, EventEmitter.prototype, {
   getAll: function () {
      return _appList;
   },
   emitChange: function () {
      this.emit(CHANGE_EVENT);
   },
   addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
   },
   removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
   }
});

function _apiGetAllSuccess(data) {
    _appList = data;
}

// register the dispatcher callback
AppDispatcher.register(function (action) {
   switch (action.actionType) {
       case AppConstants.API_GETALL_SUCCESS:
           _apiGetAllSuccess(action.data);
           AppStore.emitChange();
           break;
   }
});

export default AppStore;