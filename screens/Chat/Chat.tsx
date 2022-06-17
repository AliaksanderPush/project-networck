import React, { useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import { fetchPosts } from '../../redux/acshions/acshions.post';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { ChatRoom } from '../ChatRoom/ChatRoom';
import { styles } from './Chat.styles';

export const Chat = () => {
	const { fetchPosts } = useActions();
	const { posts } = useTypedSelector((state) => state.posts);
	const { error, loading } = useTypedSelector((state) => state.AppReducer);
	//console.log('posts>>', posts);

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<View style={styles.feed_page}>
			<FlatList data={posts} renderItem={({ item }) => <CardMessage item={item} />} />
		</View>
	);
};
