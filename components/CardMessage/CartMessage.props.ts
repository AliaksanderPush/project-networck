import { IFriend, IUser } from '../../user/User.props';

export interface ICartMessageProps {
	item: IFriend;
	myId: string | null;
	users: IUser[];
}
