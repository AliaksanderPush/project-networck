import { IUser } from '../../types/types';

export interface ICardPerson {
	info: IUser;
	myId: string;
	isFriends: boolean | undefined;
}
