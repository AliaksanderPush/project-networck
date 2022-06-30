import { Dispatch } from 'redux';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { MessageActionTypes, MessagesAction } from '../types/messages.types';
import { addNewMessage, getMessageAll } from '../../service/message.service';

export const fetchMessages = (friendRoomId: string): any => {
	return async (dispatch: Dispatch<MessagesAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await getMessageAll(friendRoomId);
			const { data } = response;
			dispatch({
				type: MessageActionTypes.LOAD_MESSAGES_SUCCESS,
				payload: data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const createMessage = (id: string, content: string): any => {
	return async (dispatch: Dispatch<MessagesAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await addNewMessage(id, content);
			const { data } = response;
			console.log('priletelo mess!>>>', data);
			dispatch({
				type: MessageActionTypes.ADD_MESSAGE,
				content: data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
