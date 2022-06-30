import { Dispatch } from 'redux';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { FriendsAction, FriendsActionTypes } from '../types/friends.types';
import { addNewFriend, getFriendsAll, removeFriend } from '../../service/friends.service';

export const fetchFriends = (): any => {
	return async (dispatch: Dispatch<FriendsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await getFriendsAll();
			const { data } = response;
			dispatch({
				type: FriendsActionTypes.LOAD_FRIENDS_SUCCESS,
				payload: data.contacts,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const addFriend = (userName: string, id: string) => {
	return async (dispatch: Dispatch<FriendsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await addNewFriend(userName, id);
			const { data } = response;
			dispatch({
				type: FriendsActionTypes.ADD_FRIEND,
				friend: data,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

/*
export const deleteFriend = (id: string) => {
	return async (dispatch: Dispatch<FriendsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await removeFriend(id);
			const { data } = response;
			dispatch({
				type: FriendsActionTypes.DELETE_FRIEND,
				friendId: data.userId._id!,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
*/
