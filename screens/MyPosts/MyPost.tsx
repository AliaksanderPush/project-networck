import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { CardPost } from '../../components/CardPost/CardPost';
import { EditMenu } from '../../components/EditMenu/EditMenu';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { IPost } from '../../types/types';
import { MyPostProps } from './MyPost.props';

export const MyPost = ({ route }: MyPostProps): JSX.Element => {
	const { posts } = useTypedSelector((state) => state.posts);
	const { id } = route.params;
	const [myPost, setMyPost] = useState<IPost | null>(null);

	useEffect(() => {
		const seachPost = posts.find((item) => item._id === id);
		if (seachPost) {
			setMyPost(seachPost);
		}
	}, []);
	return (
		<ScrollView>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginHorizontal: 5,
				}}
			>
				<TopBackMenu />
				<EditMenu postId={id} path='UpdatePost' />
			</View>
			<CardPost post={myPost} id={id} hide={false} />
		</ScrollView>
	);
};
