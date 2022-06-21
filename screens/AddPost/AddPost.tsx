import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { colors } from '../../config/Colors';
import { Entypo } from '@expo/vector-icons';
import { styles } from './AddPost.styles';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { FormDataProps } from '../Account/Account.props';
import { AddPostProps } from './AddPost.props';
import { createFoto } from '../../helpers/helper';

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
		const formData: FormDataProps = new FormData();
		formData.append('filedata', {
			name: 'filedata',
			uri: image,
			type: 'image/jpg',
		});
		const data = {
			title,
			content,
			image: formData,
		};
		createPosts(data);
		setImage('');
		setTitle('');
		setContent('');
		navigation.navigate('Feed');
	};
	return (
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<View style={styles.post_image}>
					{image ? (
						<Image style={{ width: 250, height: 250 }} source={{ uri: image }} />
					) : (
						<TouchableOpacity onPress={handleCreateFoto}>
							<Entypo name='camera' size={60} color={colors.gray1} />
						</TouchableOpacity>
					)}
				</View>
				{image ? (
					<TouchableOpacity onPress={handleCreateFoto}>
						<Entypo name='camera' size={32} color={colors.black} />
					</TouchableOpacity>
				) : null}
				<View style={styles.text_container}>
					<Text style={{ marginLeft: '10%' }}>Title</Text>
					<TextInput style={styles.input_title} onChangeText={setTitle} value={title} />
					<Text style={{ marginLeft: '10%' }}>Content</Text>
					<TextInput
						style={styles.input}
						multiline={true}
						numberOfLines={4}
						onChangeText={setContent}
						value={content}
					/>
					<View style={styles.post_button}>
						<PrimaryButton
							label='Add Post'
							size={10}
							loading={loading}
							setValue={handleSubmit}
						/>
					</View>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
};
