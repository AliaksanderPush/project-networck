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
			const response = await autorization(user);
			console.log('priletelo>>', response.data);
			await AsyncStorage.setItem('@auth', JSON.stringify(response.data.token.refreshToken));
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: response.data,
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
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token.accesToken));
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
			const { data } = response;
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token.accesToken));
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
			console.log('checkUser>>', data.token.accesToken);
			console.log('stora>> do', await AsyncStorage.getItem('@auth'));
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token.refreshToken));
			console.log('stora>> posle', await AsyncStorage.getItem('@auth'));
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
