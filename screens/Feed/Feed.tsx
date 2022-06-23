import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { CardPost } from '../../components/CardPost/CardPost';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/acshions/acshions.post';

export const Feed = () => {
	const { posts } = useTypedSelector((state) => state.posts);
	const { user } = useTypedSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={posts}
				renderItem={({ item }) => {
					return <CardPost post={item} id={user?._id} hide={true} />;
				}}
			/>
		</View>
	);
};
