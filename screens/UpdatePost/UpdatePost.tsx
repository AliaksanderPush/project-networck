import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createFoto, createFormdata } from '../../helpers/helper';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { FormPost } from '../../components/FormPost/FormPost';
import { PropsUpdatePost } from './UpdatePost.props';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const UpdatePost = ({ navigation, route }: PropsUpdatePost) => {
	const { posts } = useTypedSelector((state) => state.posts);
	const { id } = route.params;
	const [title, setTitle] = useState<string>('');
	const [content, setContent] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const { updatePosts } = useActions();
	const [imgFormData, setImgFormData] = useState<boolean>(false);

	const handleCreateFoto = async () => {
		const uri = await createFoto();
		setImage(uri as string);
		setImgFormData(true);
	};
	const handleSubmit = () => {
		if (!title || !content || !image) {
			return;
		} else {
			const formData = createFormdata(image);
			const data = {
				title,
				content,
				image: imgFormData ? formData : image,
			};
			updatePosts(data, id!, imgFormData);
			setImage('');
			setTitle('');
			setContent('');
			navigation.navigate('Account');
		}
	};

	useEffect(() => {
		const updatePost = posts.find((item) => item._id === id);
		if (updatePost) {
			const { title, content, featuredImage } = updatePost;
			setTitle(title);
			setContent(content);
			setImage(featuredImage);
		}
	}, []);

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
				imgFormData={imgFormData}
				lable={'Update Post'}
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
