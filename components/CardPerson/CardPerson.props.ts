import { Socket } from 'socket.io-client';
import { IUser } from '../../types/types';

export interface ICardPerson {
	info: IUser;
	myId: string | undefined;
	isFriends: boolean | undefined;
	socket: Socket | null;
}
