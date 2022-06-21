import { SetStateAction } from 'react';

export interface IFormProps {
	loading: boolean;
	lable: 'Update Post' | 'Add Post';
	content: string | undefined;
	title: string | undefined;
	image: string | undefined;
	imgFormData: boolean;
	setTitl: (text: SetStateAction<string>) => void;
	setConten: (text: SetStateAction<string>) => void;
	handleSubmit: () => void;
	handleCreateFoto: () => void;
}
