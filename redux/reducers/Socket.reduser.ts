import { ISocketsState, LoadSocketsActionTypes, SocketsAction } from '../types/socket.types';

const initialState: ISocketsState = {
	socket: null,
	username: '',
	messages: [],
	roomId: '',
	rooms: {},
};

export const SocketReducer = (state = initialState, action: SocketsAction): ISocketsState => {
	switch (action.type) {
		case LoadSocketsActionTypes.LOAD_SOCKET:
			return {
				...state,
				socket: action.data,
			};

		default:
			return state;
	}
};
