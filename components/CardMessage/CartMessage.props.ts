import { IFriend, IUser } from '../../types/types';

export interface ICartMessageProps {
	item: IFriend;
	myId: string | null;
	users: IUser[];
}
