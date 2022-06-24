import { SetStateAction } from 'react';

export interface IMessageInput {
	chat: boolean;
	onChange: (text: SetStateAction<string>) => void;
	value: string;
	handlePress: () => void;
}
