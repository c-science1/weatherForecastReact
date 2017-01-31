import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import fetch from 'isomorphic-fetch';
let AppActions = {

	apiGetAll: function () {
	    AppDispatcher.dispatch({
	        actionType: AppConstants.API_GETALL_START
	    });
	    fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=3b96b2f102c361363ad9a8f3ee82d78c').then(function (response) {
	        
			return response.json();
	    }).then(function (apiData) {
			//console.log(apiData);
	        AppDispatcher.dispatch({
	            actionType: AppConstants.API_GETALL_SUCCESS,
	            data: apiData
	        });
	    });
	}
}
export default AppActions;