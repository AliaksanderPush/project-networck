import { IFriend } from '../../user/User.props';

export interface IFriendsState {
	friends: IFriend[];
}

export enum FriendsActionTypes {
	LOAD_FRIENDS_SUCCESS = 'LOAD_FRIENDS_SUCCESS',
	ADD_FRIEND = 'ADD_FRIEND',
	DELETE_FRIEND = 'DELETE_FRIEND',
}

interface ILoadSuccessFriendsAction {
	type: FriendsActionTypes.LOAD_FRIENDS_SUCCESS;
	payload: IFriend[];
}

interface IAddFriend {
	type: FriendsActionTypes.ADD_FRIEND;
	friend: IFriend;
}

interface IDeleteFriend {
	type: FriendsActionTypes.DELETE_FRIEND;
	friendId: string;
}

export type FriendsAction = ILoadSuccessFriendsAction | IAddFriend | IDeleteFriend;
