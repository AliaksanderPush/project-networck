import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { CardPost } from '../../components/CardPost/CardPost';
import { DeleteMenu } from '../../components/DeleteMenu/DeleteMenu';
import { EditMenu } from '../../components/EditMenu/EditMenu';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { IPost } from '../../types/types';
import { PostDetailsProps } from './PostDetails.props';

export const PostDetails = ({ route }: PostDetailsProps): JSX.Element => {
	const { posts } = useTypedSelector((state) => state.posts);
	const { user } = useTypedSelector((state) => state.user);
	const { id } = route.params;
	const [post, setPost] = useState<IPost | null>(null);

	useEffect(() => {
		const searchPost = posts.find((item) => item._id === id);
		if (searchPost) {
			setPost(searchPost);
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
				{user?.roles[0] === 'admin' && (
					<View style={{ flexDirection: 'row' }}>
						<EditMenu postId={id} path='UpdatePost' />
						<DeleteMenu id={post?._id} />
					</View>
				)}
			</View>
			<CardPost post={post} id={id} hide={false} />
		</ScrollView>
	);
};
