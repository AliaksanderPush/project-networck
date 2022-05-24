import { UserAction, UserActionTypes } from '../types/user.types';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegistr } from '../../user/User.props';
import { autorization, registration } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUser = (user: IUserLogin) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await autorization(user);
			await AsyncStorage.setItem('@auth', JSON.stringify(response.jwt));
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: response,
			});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.response.data,
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

export const logOut = async () => {
	await AsyncStorage.removeItem('@auth');
	return {
		type: UserActionTypes.SINGOUT_USER,
	};
};
