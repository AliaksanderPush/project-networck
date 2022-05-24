import { KeyboardTypeOptions } from 'react-native';
import React, { SetStateAction } from 'react';

export interface ITextInput {
	autoCompleteType?: string;
	title?: string;
	value: string;
	setValue: (text: SetStateAction<string>) => void;
	secureTextEntry?: boolean;
	keyboardType?: KeyboardTypeOptions;
	onBlur: () => void;
	err?: boolean | undefined;
}
