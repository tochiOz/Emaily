import axios from 'axios';
import { FETCH_USER } from './type';

//action used to call current user
export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current/user');
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

// action used to send  stripe token to the backend
export const handleToken = (token) => async (dispatch) => {
	const res = await axios.post('/api/stripe/credits', token);
	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};

// Action used to send emails for the survey
export const submitSurvey = (formValues) => async (dispatch) => {
	const res = await axios.post('/api/survey/post', formValues);

	dispatch({
		type: FETCH_USER,
		payload: res.data
	});
};
