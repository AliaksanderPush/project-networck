import { IMessage } from '../../types/types';

export interface IMessageProps {
	message: IMessage;
	isMe: boolean;
	handleDeleteMessage: (msgId: string, friendById: string) => void;
}
