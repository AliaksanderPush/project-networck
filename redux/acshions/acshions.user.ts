import { UserAction, UserActionTypes } from '../types/user.types';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegistr, IUser } from '../../user/User.props';
import {
	autorization,
	registration,
	putUser,
	getRefreshToken,
	logoutSite,
} from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUser = (user: IUserLogin) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const { data } = await autorization(user);
			console.log('data>>>', data);
			await AsyncStorage.setItem('@auth', JSON.stringify(data.accesToken));
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: data,
			});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.data,
			});
		}
	};
};

export const addUserState = (user: IUserRegistr) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const { data } = await registration(user);
			await AsyncStorage.setItem('@auth', JSON.stringify(data.accesToken));
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: data,
			});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.data,
			});
		}
	};
};

export const updateUser = (id: string | undefined, newUser: IUser) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const { data } = await putUser(id, newUser);
			await AsyncStorage.setItem('@auth', JSON.stringify(data.accesToken));
			dispatch({
				type: UserActionTypes.UPDATE_USER,
				updateUser: data,
			});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.response.data,
			});
		}
	};
};

export const logOut = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await logoutSite();
			console.log('logout>>', response);
			await AsyncStorage.removeItem('@auth');
			dispatch({
				type: UserActionTypes.SINGOUT_USER,
			});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.response.data,
			});
		}
	};
};

export const checkUser = async () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const { data } = await getRefreshToken();
			AsyncStorage.setItem('@auth', JSON.stringify(data.accesToken));
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: data,
			});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.response.data,
			});
		}
	};
};
