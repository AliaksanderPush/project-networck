import { UserAction, UserActionTypes } from '../types/user.types';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegistr, IUser } from '../../types/types';
import {
	autorization,
	registration,
	putUser,
	getRefreshToken,
	logoutSite,
	upLoadFileImage,
	putAvatar,
	getUsers,
} from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormDataProps } from '../../screens/Account/Account.props';
import { errorOn, loaderOff, loaderOn } from './acshions.app';
import { AppAction } from '../types/app.types';
import { FriendsAction, FriendsActionTypes } from '../types/friends.types';
import { LoadSocketsActionTypes, SocketsAction } from '../types/socket.types';

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
	return async (dispatch: Dispatch<UserAction | AppAction | FriendsAction | SocketsAction>) => {
		try {
			dispatch(loaderOn());
			await AsyncStorage.removeItem('@auth');
			dispatch({
				type: UserActionTypes.SINGOUT_USER,
			});
			dispatch({
				type: FriendsActionTypes.LOGOUT_USER,
			});
			dispatch({
				type: LoadSocketsActionTypes.CLEAR_SOCKET,
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

export const fetchAllUsers = (): any => {
	return async (dispatch: Dispatch<UserAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await getUsers();
			dispatch({
				type: UserActionTypes.GET_ALL_USERS,
				users: response.data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
