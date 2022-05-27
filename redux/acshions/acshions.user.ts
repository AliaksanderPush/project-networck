import { UserAction, UserActionTypes } from '../types/user.types';
import { Dispatch } from 'redux';
import { IUserLogin, IUserRegistr, IUser } from '../../user/User.props';
import { autorization, registration, putUser, getRefreshToken } from '../../service/service';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchUser = (user: IUserLogin) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await autorization(user);
			await AsyncStorage.setItem('@auth', JSON.stringify(response.token));
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

export const updateUser = (id: string | undefined, newUser: IUser) => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			dispatch({ type: UserActionTypes.LOAD_USER });
			const response = await putUser(id, newUser);
			await AsyncStorage.setItem('@auth', JSON.stringify(response.token));
			dispatch({
				type: UserActionTypes.UPDATE_USER,
				updateUser: response,
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
	return {
		type: UserActionTypes.SINGOUT_USER,
	};
};

/*
export function logout() {
	return async (dispatch) => {
	  try {
		await logoutSite();
		localStorage.removeItem("token");
		dispatch({
		  type: USER_LOGOUT,
		  auth: {},
		  ented: false,
		});
	  } catch (error) {
		dispatch(errorOn());
		console.error(error);
	  }
	};
  }
  
*/

export const checkUser = async () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const data = await getRefreshToken();
			AsyncStorage.setItem('@auth', JSON.stringify(data));
			//dispatch({
			//  type: GET_USER_LOAD,
			// auth: data.user,

			//	});
		} catch (err: any) {
			dispatch({
				type: UserActionTypes.LOAD_USER_ERROR,
				payload: err.response.data,
			});
		}
	};
};
