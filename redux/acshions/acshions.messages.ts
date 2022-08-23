import { Dispatch } from 'redux';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { MessageActionTypes, MessagesAction } from '../types/messages.types';
import { addNewMessage, getMessageAll, removeMessage } from '../../service/message.service';
import { upLoadFileImage } from '../../service/service';
import { FormDataProps } from '../../screens/Account/Account.props';

export const fetchMessages = (friendRoomId: string): any => {
	return async (dispatch: Dispatch<MessagesAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const { data } = await getMessageAll(friendRoomId);
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

export const createMessage = (id: string, content: string, image?: string | FormDataProps): any => {
	return async (dispatch: Dispatch<MessagesAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			let img = '';

			if (image) {
				img = await upLoadFileImage(image as FormDataProps);
			}
			const { data } = await addNewMessage(id, content, img);
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
export const deleteMessage = (id: string, friendId: string): any => {
	return async (dispatch: Dispatch<MessagesAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await removeMessage(id, friendId);
			const { data } = response;
			dispatch({
				type: MessageActionTypes.DELETE_MESSAGE,
				mesId: data._id,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
