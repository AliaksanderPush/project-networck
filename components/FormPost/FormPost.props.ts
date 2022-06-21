import { SetStateAction } from 'react';

export interface IFormProps {
	loading: boolean;
	lable: 'Update Post' | 'Add Post';
	content: string | undefined;
	title: string | undefined;
	image: string | undefined;
	imgFormData: boolean;
	setTitl: (text: SetStateAction<string | undefined>) => void;
	setConten: (text: SetStateAction<string | undefined>) => void;
	handleSubmit: () => void;
	handleCreateFoto: () => void;
}
