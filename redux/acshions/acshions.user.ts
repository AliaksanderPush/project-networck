import { UserAction, UserActionTypes } from '../types/user.types';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegistr } from '../../user/User.props';
import { autorization, registration } from '../../service/service';

export const fetchUser = (user: IUserLogin) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await autorization(user);
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: response,
			});
		} catch (e) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: 'Error',
			});
		}
	};
};

export const addUserState = (user: IUserRegistr) => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.LOAD_USER });
		const response = await registration(user);

		return response;
	};
};
