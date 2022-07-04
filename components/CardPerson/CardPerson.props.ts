import { IUser, IFriend } from '../../user/User.props';

export interface ICardPerson {
	info: IUser;
	myId: string;
	friends: IFriend[];
}
