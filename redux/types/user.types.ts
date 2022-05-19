import { IUserDTO } from '../../user/User.props';

export interface IUserState {
	user: IUserDTO | null;
	loading: boolean;
	error: null | string;
}

export enum UserActionTypes {
	LOAD_USER = 'LOAD_USER',
	LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS',
	LOAD_USER_ERROR = 'LOAD_USER_ERROR',
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

export type UserAction = ILoadUserAction | ILoadSuccessUserAction | ILoadErrorUserAction;
