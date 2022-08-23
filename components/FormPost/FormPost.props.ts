import { SetStateAction } from 'react';

export interface IFormProps {
	loading: boolean;
	content: string | undefined;
	title: string | undefined;
	image: string | undefined;
	setTitl: (text: SetStateAction<string | undefined>) => void;
	setConten: (text: SetStateAction<string | undefined>) => void;
	handleSubmit: () => void;
	handleCreateFoto: () => void;
}
