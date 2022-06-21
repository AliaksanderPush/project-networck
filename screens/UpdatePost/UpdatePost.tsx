import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createFoto, createFormdata } from '../../helpers/helper';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { FormPost } from '../../components/FormPost/FormPost';
import { PropsUdatePass } from '../UpdatePassword/UpdateProfile.props';
import { PropsUpdatePost } from './UpdatePost.props';

export const UpdatePost = ({ navigation }: PropsUpdatePost) => {
	const [title, setTitle] = useState<string>();
	const [content, setContent] = useState<string>();
	const [image, setImage] = useState<string>();

	const handleCreateFoto = async () => {
		//const uri = await createFoto();
		//setImage(uri);
		alert('work!');
	};
	const handleSubmit = () => {
		alert('worck!!');
		/*
		if (!title && !content && !image) {
			return;
		}
		const formData = createFormdata(image);
		const data = {
			title,
			content,
			formData,
		};

		setImage('');
		setTitle('');
		setContent('');
		
		*/
		navigation.navigate('Account');
	};

	return (
		<>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: 5,
				}}
			>
				<TopBackMenu />
			</View>
			<FormPost
				loading={false}
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
