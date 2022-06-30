import { IFriend } from '../../user/User.props';

export interface IFriendsState {
	friends: IFriend[];
}

export enum FriendsActionTypes {
	LOAD_FRIENDS_SUCCESS = 'LOAD_FRIENDS_SUCCESS',
}

interface ILoadSuccessFriendsAction {
	type: FriendsActionTypes.LOAD_FRIENDS_SUCCESS;
	payload: IFriend[];
}

export type FriendsAction = ILoadSuccessFriendsAction;
