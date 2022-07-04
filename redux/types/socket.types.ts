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
}

interface ILoadSocketAction {
	type: LoadSocketsActionTypes;
	data: Socket;
}

export type SocketsAction = ILoadSocketAction;
