import { Socket } from 'socket.io-client';
import { LoadSocketsActionTypes } from '../types/socket.types';

export const loadSocket = (socket: Socket) => {
	return {
		type: LoadSocketsActionTypes.LOAD_SOCKET,
		data: socket,
	};
};
