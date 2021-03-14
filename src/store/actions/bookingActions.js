import { CREATE_BOOK } from '../actions/types';

import instance from './instance';

export const bookingCreate = (newBook) => {
	return async (dispatch) => {
		try {
			const res = await instance.post(`/booking`, newBook);
			console.log(res.data);
			dispatch({
				type: CREATE_BOOK,
				payload: { newBook: res.data },
			});
		} catch (error) {
			console.log(error);
		}
	};
};
