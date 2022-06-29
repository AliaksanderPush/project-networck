import { IUser, IUserDTO, IUserTokens } from '../../user/User.props';

export interface IUserState {
	user: IUser | null;
	tokens: IUserTokens | null;
	users: IUser[];
}

export enum UserActionTypes {
	LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
	SINGOUT_USER = 'SINGOUT_USER',
	UPDATE_USER = 'UPDATE_USER',
	UPDATE_PASSWORD = 'UPDATE_PASSWORD',
	UPDATE_AVATAR = 'UPDATE_AVATAR',
	GET_ALL_USERS = 'GET_ALL_USERS',
	ADD_FRIENDS = 'ADD_FRIENDS',
	DELETE_FRIEND = 'DELETE_FRIEND',
}

interface ILoadSuccessUserAction {
	type: UserActionTypes.LOAD_USER_SUCCESS;
	payload: IUserDTO;
}

interface IUserSingOut {
	type: UserActionTypes.SINGOUT_USER;
}

interface IUserUpdate {
	type: UserActionTypes.UPDATE_USER;
	updateUser: IUserDTO;
}

interface IUserUpdatePassword {
	type: UserActionTypes.UPDATE_PASSWORD;
	pass: string;
}

interface IUserUpdateAvatar {
	type: UserActionTypes.UPDATE_AVATAR;
	img: string;
}

interface IGetAllUsers {
	type: UserActionTypes.GET_ALL_USERS;
	users: IUser[];
}

interface IAddFriend {
	type: UserActionTypes.ADD_FRIENDS;
	upUser: IUser;
}

interface IRemoveFriend {
	type: UserActionTypes.DELETE_FRIEND;
	remUser: IUser;
}

export type UserAction =
	| ILoadSuccessUserAction
	| IUserSingOut
	| IUserUpdate
	| IUserUpdatePassword
	| IUserUpdateAvatar
	| IGetAllUsers
	| IAddFriend
	| IRemoveFriend;
