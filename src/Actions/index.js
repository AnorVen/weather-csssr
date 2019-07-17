import {
	GET_DETAILS_REQUEST,
	GET_DETAILS_SUCCESS,
	GET_DATE,
	DETAILS,
	ERROR_REQUEST,
} from '../Constats';
import ReduxThunk from 'redux-thunk';
import axios from 'axios';
const apiKey = '108aecd085c5e10a193fa4d7440ba5cb';
export const getDetailsREQUESTAction = id => ({
	type: GET_DETAILS_REQUEST,
	payload: id,
});
export const getDetailsSUCCESSAction = id => ({
	type: GET_DETAILS_SUCCESS,
	payload: id,
});
export const getDateAction = date => ({
	type: GET_DATE,
	payload: date,
});

export const itemsFetchDataSuccess = item => ({
	type: DETAILS,
	payload: item,
});
export const itemsHasErrored = message => ({
	type: ERROR_REQUEST,
	payload: message,
});
export function itemsFetchData(id) {
	return (dispatch, getState) => {
		//dispatch(getDetailsREQUESTAction(id));
		axios
			.get(`api.openweathermap.org/data/2.5/weather?id=${id}&apikey=${apiKey}`)
			.then(response => {
				console.log(response);
				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(getDetailsSUCCESSAction(id));

				return response;
			})
			.then(response => response.json())
			.then(items => dispatch(itemsFetchDataSuccess(items)))
			.catch(e => dispatch(itemsHasErrored(e)));
	};
}
