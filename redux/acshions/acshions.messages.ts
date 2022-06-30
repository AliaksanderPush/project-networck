import { Dispatch } from 'redux';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { MessageActionTypes, MessagesAction } from '../types/messages.types';
import { getMessageAll } from '../../service/message.service';

export const fetchMessages = (friendRoomId: string): any => {
	return async (dispatch: Dispatch<MessagesAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await getMessageAll(friendRoomId);
			const { data } = response;
			console.log('priletelo>>>', data);
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
