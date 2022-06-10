import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Message } from '../../components/Message/Message';
import chatRoomData from '../../assets/damy-data/chats';
import chatRoom from '../../assets/damy-data/chatRoom';
import { MessageInput } from '../../components/MessageInput/MessageInput';
import { styles } from './ChatRoom.styles';
import { PropsChatRoom } from './ChatRoom.props';

export const ChatRoom = ({ navigation, route }: PropsChatRoom) => {
	let { id } = route.params;
	const [chat, setChat] = useState(null);
	console.log('Displaying chat room: ', id);
	console.log('chat>>', chat);

	navigation.setOptions({ title: 'Elon Musk' });
	useEffect(() => {
		const seachChat = chatRoom.find((item) => item.id === id);
		//setChat(seachChat);
	}, []);
	return (
		<SafeAreaView style={styles.chatRoom}>
			<FlatList
				data={chatRoomData.messages}
				renderItem={({ item }) => <Message message={item} />}
				inverted
			/>
			<MessageInput />
		</SafeAreaView>
	);
};
