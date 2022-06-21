import React, { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEvent } from 'react-native-reanimated';
import { CardPost } from '../../components/CardPost/CardPost';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

import { styles } from './Feed.styles';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/acshions/acshions.post';

export const Feed = () => {
	const { posts } = useTypedSelector((state) => state.posts);
	const { user } = useTypedSelector((state) => state.user);
	const dispatch = useDispatch();
	const getHeader = () => {
		return <Text>{'Feed'}</Text>;
	};

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<View style={styles.friends_page}>
			<FlatList
				data={posts}
				renderItem={({ item }) => {
					return <CardPost post={item} id={user?._id} />;
				}}
				ListHeaderComponent={getHeader}
			/>
		</View>
	);
};
