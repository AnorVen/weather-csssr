import {
	GET_DETAILS_REQUEST,
	GET_DETAILS_SUCCESS,
	GET_DATE,
	DETAILS,
	ERROR_REQUEST,
	GET_LIST,
} from '../Constats';
import axios from 'axios';

const apiKey = '108aecd085c5e10a193fa4d7440ba5cb';

export const getListAction = () => ({
	type: GET_LIST,
});
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
export const itemsFetchData = (date, id) => (dispatch, getState) => {
	console.log(date);
	console.log(date * 1000 - Date.now());
	date = date - Date.now() > 0 ? (new Date(date - Date.now()).getDate() + 1) * 8 : 8;
	console.log(date);
	dispatch(getDetailsREQUESTAction(id));
	fetch(
		`https://api.openweathermap.org/data/2.5/forecast?id=${id}&cnt=${date}&lang=ru&units=metric&appid=${apiKey}`
	)
		// fetch(`https://api.openweathermap.org/data/2.5/climate/month?id=${id}&lang=ru&units=metric&appid=${apiKey}`)
		.then(response => {
			console.log(response);
			if (!response.ok) {
				throw Error(response.statusText);
			}

			dispatch(getDetailsSUCCESSAction(id));

			return response;
		})
		.then(response => {
			return response.json();
		})
		.then(items => dispatch(itemsFetchDataSuccess(items)))
		.catch(e => dispatch(itemsHasErrored(e)));
};
