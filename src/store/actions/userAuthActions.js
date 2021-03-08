import instance from './instance';
import decode from 'jwt-decode';
import { SET_USER } from './types';

const setUser = (token) => {
	localStorage.setItem('myToken', token);
	//the req with instance will be will a token
	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
	return {
		type: SET_USER,
		payload: decode(token),
	};
};

export const signup = (newUser, history) => {
	return async (dispatch) => {
		try {
			const formData = new FormData();
			for (const key in newUser) formData.append(key, newUser[key]);
			const res = await instance.post('/Signup', formData);
			localStorage.setItem('myToken', res.data.token);
			dispatch(setUser(res.data.token));

			history.replace('/');
			console.log('Your user has been created successfully');
		} catch (error) {
			console.log(error);
		}
	};
};

export const signin = (user, history) => {
	return async (dispatch) => {
		try {
			const res = await instance.post('/Signin', user);
			localStorage.setItem('myToken', res.data.token);
			dispatch(setUser(res.data.token));
			history.replace('/');
			console.log('Your user has been sing in successfully');
		} catch (error) {
			console.log(error);
		}
	};
};

export const singout = () => {
	localStorage.removeItem('myToken');
	delete instance.defaults.headers.common.Authorization;

	return {
		type: SET_USER,
		payload: null,
	};
};

export const checkForTokenUser = () => (dispatch) => {
	const token = localStorage.getItem('myToken');
	if (token) {
		const user = decode(token);
		const currentTime = Date.now();
		if (user.exp >= currentTime) {
			dispatch(setUser(token));
		} else {
			localStorage.removeItem('myToken');
			dispatch(singout());
		}
	}
};
