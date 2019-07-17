import {
	GET_DETAILS_REQUEST,
	GET_DETAILS_SUCCESS,
	GET_DATE,
	DETAILS,
	ERROR_REQUEST,
} from '../Constats';

const initialState = {
	loading: false,
	cityId: '',
	weather: 0,
	date: Date.now(),
	result: '',
	error: '',
};
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_DETAILS_REQUEST: {
			return { ...state, cityId: action.payload, loading: true };
		}
		case GET_DETAILS_SUCCESS: {
			return { ...state, loading: false };
		}
		case GET_DATE: {
			return { ...state, date: action.payload };
		}
		case ERROR_REQUEST: {
			return { ...state, loading: false, error: action.payload.message };
		}
		case DETAILS: {
			return { ...state, result: action.payload };
		}
		default:
			return state;
	}
}
