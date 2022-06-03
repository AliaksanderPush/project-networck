import { IUser, IUserDTO, IUserTokens } from '../../user/User.props';

export interface IUserState {
	user: IUser | null;
	loading: boolean;
	error: null | string;
	tokens: IUserTokens | null;
}

export enum UserActionTypes {
	LOAD_USER = 'LOAD_USER',
	LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
	LOAD_USER_ERROR = 'LOAD_USER_ERROR',
	SINGOUT_USER = 'SINGOUT_USER',
	UPDATE_USER = 'UPDATE_USER',
}

interface ILoadUserAction {
	type: UserActionTypes.LOAD_USER;
}

interface ILoadSuccessUserAction {
	type: UserActionTypes.LOAD_USER_SUCCESS;
	payload: IUserDTO;
}

interface ILoadErrorUserAction {
	type: UserActionTypes.LOAD_USER_ERROR;
	payload: string;
}

interface IUserSingOut {
	type: UserActionTypes.SINGOUT_USER;
}

interface IUserUpdate {
	type: UserActionTypes.UPDATE_USER;
	updateUser: IUserDTO;
}

export type UserAction =
	| ILoadUserAction
	| ILoadSuccessUserAction
	| ILoadErrorUserAction
	| IUserSingOut
	| IUserUpdate;
