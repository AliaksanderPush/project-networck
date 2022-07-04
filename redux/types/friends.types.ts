import { IFriend } from '../../user/User.props';

export interface IFriendsState {
	friends: IFriend[];
}

export enum FriendsActionTypes {
	LOAD_FRIENDS_SUCCESS = 'LOAD_FRIENDS_SUCCESS',
	READ_MESSAGER_FROM_FRIEND = 'READ_MESSAGER_FROM_FRIEND',
	ADD_FRIENDS = 'ADD_FRIENDS',
	DELETE_FRIEND = 'DELETE_FRIEND',
	LOGOUT_USER = 'LOGOUT_USER',
}

interface ILoadSuccessFriendsAction {
	type: FriendsActionTypes.LOAD_FRIENDS_SUCCESS;
	payload: IFriend[];
}
interface IReadMessagerAction {
	type: FriendsActionTypes.READ_MESSAGER_FROM_FRIEND;
	date: Date;
}

interface IAddNewFriendAction {
	type: FriendsActionTypes.ADD_FRIENDS;
	friend: IFriend;
}
interface IDeleteFriendAction {
	type: FriendsActionTypes.DELETE_FRIEND;
	friendId: string;
}
interface ILogoutFriendAction {
	type: FriendsActionTypes.LOGOUT_USER;
}

export type FriendsAction =
	| ILoadSuccessFriendsAction
	| IReadMessagerAction
	| IAddNewFriendAction
	| IDeleteFriendAction
	| ILogoutFriendAction;
