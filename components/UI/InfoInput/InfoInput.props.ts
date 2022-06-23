import { SetStateAction } from 'react';

export interface IInfoInput {
	value: string;
	setValue: (text: SetStateAction<string>) => void;
	size: number;
	position: 'top' | 'center';
	placehold?: string;
}
