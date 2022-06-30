import { IMessagesState, MessageActionTypes, MessagesAction } from '../types/messages.types';

const initialState: IMessagesState = {
	messages: [],
};

export const MessagesReducer = (state = initialState, action: MessagesAction): IMessagesState => {
	switch (action.type) {
		case MessageActionTypes.LOAD_MESSAGES_SUCCESS:
			return {
				...state,
				messages: action.payload,
			};

		default:
			return state;
	}
};
