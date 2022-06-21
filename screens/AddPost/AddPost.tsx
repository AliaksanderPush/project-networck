import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { colors } from '../../config/Colors';
import { Entypo } from '@expo/vector-icons';
import { styles } from './AddPost.styles';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { AddPostProps } from './AddPost.props';
import { createFormdata, createFoto } from '../../helpers/helper';
import { FormPost } from '../../components/FormPost/FormPost';

export const AddPost = ({ navigation }: AddPostProps): JSX.Element => {
	const loading = false;
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [image, setImage] = useState<string>('');

	const { createPosts } = useActions();

	const handleCreateFoto = async () => {
		const uri = await createFoto();
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
				loading={false}
				imgFormData={false}
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
