import { IFriend } from '../../user/User.props';

export interface IFriendsState {
	friends: IFriend[];
}

export enum FriendsActionTypes {
	LOAD_FRIENDS_SUCCESS = 'LOAD_FRIENDS_SUCCESS',
	READ_MESSAGER_FROM_FRIEND = 'READ_MESSAGER_FROM_FRIEND',
}

interface ILoadSuccessFriendsAction {
	type: FriendsActionTypes.LOAD_FRIENDS_SUCCESS;
	payload: IFriend[];
}
interface IReadMessagerAction {
	type: FriendsActionTypes.READ_MESSAGER_FROM_FRIEND;
	date: Date;
}

export type FriendsAction = ILoadSuccessFriendsAction | IReadMessagerAction;
