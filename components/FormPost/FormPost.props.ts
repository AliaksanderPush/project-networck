import { SetStateAction } from 'react';

export interface IFormProps {
	loading: boolean;
	lable: 'Update Post' | 'Add Post';
	content: string;
	title: string;
	image: string;
	imgFormData: boolean;
	setTitl: (text: SetStateAction<string>) => void;
	setConten: (text: SetStateAction<string>) => void;
	handleSubmit: () => void;
	handleCreateFoto: () => void;
}
