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
		case MessageActionTypes.ADD_MESSAGE:
			return {
				...state,
				messages: [action.content, ...state.messages],
			};
		case MessageActionTypes.DELETE_MESSAGE:
			const { mesId } = action;
			const { messages } = state;
			const copyState = [...messages];
			const newState = copyState.filter((item) => item._id !== mesId);
			return {
				...state,
				messages: newState,
			};

		default:
			return state;
	}
};
