import { UserAction, UserActionTypes } from '../types/user.types';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegistr, IUser } from '../../user/User.props';
import {
	autorization,
	registration,
	putUser,
	getRefreshToken,
	logoutSite,
	upLoadFileImage,
	putAvatar,
} from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormDataProps } from '../../screens/Account/Account.props';
import { errorOn, loaderOff, loaderOn } from './acshions.app';
import { AppAction } from '../types/app.types';

export const fetchUser = (user: IUserLogin) => {
	return async (dispatch: Dispatch<UserAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await autorization(user);
			const { data } = response;
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const addUserState = (user: IUserRegistr) => {
	return async (dispatch: Dispatch<UserAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await registration(user);
			const { data } = response;
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
			dispatch(loaderOff());
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: data,
			});
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const updateUser = (id: string | undefined, newUser: IUser) => {
	return async (dispatch: Dispatch<UserAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await putUser(id, newUser);
			const { data } = response;
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
			dispatch(loaderOff());
			dispatch({
				type: UserActionTypes.UPDATE_USER,
				updateUser: data,
			});
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const logOut = () => {
	return async (dispatch: Dispatch<UserAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			await AsyncStorage.removeItem('@auth');
			dispatch({
				type: UserActionTypes.SINGOUT_USER,
			});
			await logoutSite();
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const checkUser = () => {
	return async (dispatch: Dispatch<UserAction | AppAction>) => {
		try {
			const response = await getRefreshToken();
			const { data } = response;
			console.log('checkUser>>', data);
			await AsyncStorage.setItem('@auth', JSON.stringify(data.token));
			dispatch({
				type: UserActionTypes.LOAD_USER_SUCCESS,
				payload: data,
			});
		} catch (err: any) {
			dispatch(errorOn(err.response.data));
		}
	};
};

export const upDateAvatar = (form: FormDataProps) => {
	return async (dispatch: Dispatch<UserAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const path = await upLoadFileImage(form);
			const response = await putAvatar(path);
			dispatch({
				type: UserActionTypes.UPDATE_AVATAR,
				img: response.data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
