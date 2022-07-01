import { IMessage } from '../../user/User.props';

export interface IMessagesState {
	messages: IMessage[];
}

export enum MessageActionTypes {
	LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS',
	ADD_MESSAGE = 'ADD_MESSAGE',
	DELETE_MESSAGE = 'DELETE_MESSAGE',
}

interface ILoadSuccessMessagesAction {
	type: MessageActionTypes.LOAD_MESSAGES_SUCCESS;
	payload: IMessage[];
}
interface IAddMessagesAction {
	type: MessageActionTypes.ADD_MESSAGE;
	content: IMessage;
}

interface IDeleteMessagesAction {
	type: MessageActionTypes.DELETE_MESSAGE;
	mesId: string;
}

export type MessagesAction =
	| ILoadSuccessMessagesAction
	| IAddMessagesAction
	| IDeleteMessagesAction;
