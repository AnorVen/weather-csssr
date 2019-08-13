import { GET_DETAILS_REQUEST, GET_DATE, DETAILS, ERROR_REQUEST, TARGET_COUNTRY } from '../Constats';

const initialState = {
	targetCountry: 'AM',
	loading: false,
	cityId: 0,
	weather: 0,
	date: Date.now(),
	result: {},
	error: '',
};
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_DETAILS_REQUEST: {
			return { ...state, cityId: action.payload, loading: true };
		}
		case GET_DATE: {
			return { ...state, date: action.payload };
		}
		case ERROR_REQUEST: {
			return { ...state, loading: false, error: action.payload.message };
		}
		case DETAILS: {
			return { ...state, loading: false, result: action.payload };
		}
		case TARGET_COUNTRY: {
			return { ...state, targetCountry: action.payload };
		}
		default:
			return state;
	}
}
