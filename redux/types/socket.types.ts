import { Socket } from 'socket.io-client';

export interface ISocketsState {
	socket: Socket | null;
	username?: string;
	messages?: { message: string; time: string; username: string }[];
	roomId?: string;
	rooms: object;
}

export enum LoadSocketsActionTypes {
	LOAD_SOCKET = 'LOAD_SOCKET',
	CLEAR_SOCKET = 'CLEAR_SOCKET',
}

interface ILoadSocketAction {
	type: LoadSocketsActionTypes.LOAD_SOCKET;
	data: Socket;
}
interface IClearSocketAction {
	type: LoadSocketsActionTypes.CLEAR_SOCKET;
}

export type SocketsAction = ILoadSocketAction | IClearSocketAction;
