import React, { useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import VideoPlayer from '../../components/Video/VideoPlayer';
import { fetchPosts } from '../../redux/acshions/acshions.post';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { API_URL } from '../../service/auth-service';
import { ChatRoom } from '../ChatRoom/ChatRoom';
import { styles } from './Chat.styles';

export const Chat = () => {
	const { fetchPosts } = useActions();
	const { posts } = useTypedSelector((state) => state.posts);
	const { error, loading } = useTypedSelector((state) => state.AppReducer);
	//console.log('posts>>', posts);

	return (
		<View style={styles.feed_page}>
			<Text>Chat</Text>
			<VideoPlayer videoURI={`${API_URL}/45d58b8c-7bfe-4f55-9b00-0b602a22605c.mp4`} />
		</View>
	);
};
