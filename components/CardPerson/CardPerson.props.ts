import { IUser } from '../../user/User.props';

export interface ICardPerson {
	info: IUser;
	myId: string;
	isFriends: boolean | undefined;
}
