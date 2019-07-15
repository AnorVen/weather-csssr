import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_DETAILS } from '../Constats';

let nextTodoId = 0;

export const addTodo = content => ({
	type: ADD_TODO,
	payload: {
		id: ++nextTodoId,
		content,
	},
});

export const getDetailsAction = (city, country) => ({
	type: GET_DETAILS,
	payload: {
		city,
		country,
	},
});
export const toggleTodo = id => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
