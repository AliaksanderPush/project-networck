import React, { useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import { fetchPosts } from '../../redux/acshions/acshions.post';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { ChatRoom } from '../ChatRoom/ChatRoom';
import { styles } from './Chat.styles';

export const Chat = () => {
	const dispatch = useDispatch();
	const { posts, error, loading } = useTypedSelector((state) => state.posts);
	console.log('posts>>>>', posts);
	console.log('er>>', error);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return (
		<View style={styles.feed_page}>
			<FlatList data={posts} renderItem={({ item }) => <CardMessage item={item} />} />
		</View>
	);
};
