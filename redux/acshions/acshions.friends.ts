import { Dispatch } from 'redux';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, errorOff, loaderOff } from './acshions.app';
import { FriendsAction, FriendsActionTypes } from '../types/friends.types';
import { addNewFriend, getFriendsAll, removeFriend } from '../../service/friends.service';
import { IFriend } from '../../types/types';
import EVENTS from '../../config/events';
import { Socket } from 'socket.io-client';

export const fetchFriends = (socket: Socket): any => {
	return async (dispatch: Dispatch<FriendsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			await getFriendsAll();
			socket.on(EVENTS.SERVER.ROOMS, (frendschats: IFriend[]) => {
				if (frendschats) {
					dispatch({
						type: FriendsActionTypes.LOAD_FRIENDS_SUCCESS,
						payload: frendschats,
					});
				}
			});
			dispatch(loaderOff());
		} catch (err: any) {
			dispatch(errorOn(err.response.data));
			console.log(err);
			dispatch(errorOff());
		}
	};
};

export const addFriend = (id: string, myId: string, socket: Socket): any => {
	return async (dispatch: Dispatch<FriendsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			await addNewFriend(id);
			socket.on(EVENTS.SERVER.ROOM, (frendsObj: IFriend) => {
				if (frendsObj) {
					dispatch({
						type: FriendsActionTypes.ADD_FRIENDS,
						friend: frendsObj,
					});
				}
			});
			dispatch(loaderOff());
		} catch (err: any) {
			dispatch(errorOn(err.response.data));
			console.log(err);
			dispatch(errorOff());
		}
	};
};

export const deleteFriend = (id: string): any => {
	return async (dispatch: Dispatch<FriendsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await removeFriend(id);
			const { data } = response;
			dispatch({
				type: FriendsActionTypes.DELETE_FRIEND,
				friendId: data._id,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			dispatch(errorOn(err.response.data));
			console.log(err);
			dispatch(errorOff());
		}
	};
};

export const logoutFriend = () => {
	return {
		type: FriendsActionTypes.LOGOUT_USER,
	};
};
