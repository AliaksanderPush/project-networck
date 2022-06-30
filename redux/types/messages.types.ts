import { IMessage } from '../../user/User.props';

export interface IMessagesState {
	messages: IMessage[];
}

export enum MessageActionTypes {
	LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS',
}

interface ILoadSuccessMessagesAction {
	type: MessageActionTypes.LOAD_MESSAGES_SUCCESS;
	payload: IMessage[];
}

export type MessagesAction = ILoadSuccessMessagesAction;
