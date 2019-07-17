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
	result: {},
};
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_DETAILS_REQUEST: {
			console.log(action.payload);
			return { ...state, cityId: action.payload, loading: true };
		}
		case GET_DETAILS_SUCCESS: {
			console.log(action.payload);
			return { ...state, cityId: action.payload, loading: false };
		}
		case GET_DATE: {
			console.log(action.payload);
			return { ...state, date: action.payload };
		}
		case ERROR_REQUEST: {
			console.log(action.payload);
			return { ...state, loading: false, result: action.payload.message };
		}
		case DETAILS: {
			console.log(action.payload);
			return { ...state, result: action.payload };
		}

		/*	case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false,
                    },
                },
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed,
                    },
                },
            };
        }*/
		default:
			return state;
	}
}
