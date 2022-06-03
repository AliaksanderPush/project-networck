import { UserAction, UserActionTypes } from '../types/user.types';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegistr, IUser } from '../../user/User.props';
import {
	autorization,
	registration,
	putUser,
	getRefreshToken,
	logoutSite,
	upDatepass,
} from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUser = (user: IUserLogin) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await autorization(user);
			const { data } = response;
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
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

export const addUserState = (user: IUserRegistr) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await registration(user);
			const { data } = response;
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
			console.log('data>>', data);
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

export const updateUser = (id: string | undefined, newUser: IUser) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await putUser(id, newUser);
			await AsyncStorage.setItem('@auth', JSON.stringify(response.data.token));
			dispatch({
				type: UserActionTypes.UPDATE_USER,
				updateUser: response.data,
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
			await AsyncStorage.removeItem('@auth');
			const response = await logoutSite();
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

export const checkUser = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const response = await getRefreshToken();
			const { data } = response;
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
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

export const upDatePassword = (password: string) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const response = await upDatepass(password);
			//const { data } = response;
			//await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
			//	dispatch({
			//type: UserActionTypes.UPDATE_PASSWORD,
			//payload: data,
			//	});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.response.data,
			});
		}
	};
};
