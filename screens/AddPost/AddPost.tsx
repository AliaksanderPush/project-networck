import React, { useState } from 'react';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { AddPostProps } from './AddPost.props';
import { createFormdata, createFoto } from '../../helpers/helper';
import { FormPost } from '../../components/FormPost/FormPost';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

export const AddPost = ({ navigation }: AddPostProps): JSX.Element => {
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [image, setImage] = useState<string>('');

	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { createPosts } = useActions();
	console.log(image);
	const handleCreateFoto = async () => {
		const uri = await createFoto();
		setImage('');
		setImage(uri as string);
	};
	const handleSubmit = () => {
		if (!title && !content && !image) {
			return;
		}
		const formData = createFormdata(image);
		const data = {
			title,
			content,
			image: formData,
		};
		createPosts(data);
		setImage('');
		setTitle('');
		setContent('');
		navigation.navigate('FeedScreenStack');
	};
	return (
		<>
			<FormPost
				loading={loading}
				imgFormData={true}
				lable={'Add Post'}
				image={image}
				title={title}
				content={content}
				setConten={setContent}
				handleSubmit={handleSubmit}
				setTitl={setTitle}
				handleCreateFoto={handleCreateFoto}
			/>
		</>
	);
};
