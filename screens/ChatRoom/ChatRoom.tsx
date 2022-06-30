import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Message } from '../../components/Message/Message';
import chatRoomData from '../../assets/damy-data/chats';
import chatRoom from '../../assets/damy-data/chatRoom';
import { MessageInput } from '../../components/MessageInput/MessageInput';
import { styles } from './ChatRoom.styles';
import { PropsChatRoom } from './ChatRoom.props';
import { useDispatch } from 'react-redux';
import { fetchMessages } from '../../redux/acshions/acshions.messages';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

export const ChatRoom = ({ navigation, route }: PropsChatRoom) => {
	let { id } = route.params;
	const [message, setMessage] = useState<string>('');
	const dispatch = useDispatch();
	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { messages } = useTypedSelector((state) => state.messages);
	console.log('Displaying chat room: ', id);
	console.log('chat>>', messages);

	navigation.setOptions({ title: 'Elon Musk' });

	const handleMessage = () => {
		alert(message);
	};

	useEffect(() => {
		if (id) {
			dispatch(fetchMessages(id));
		}
	}, [dispatch]);

	return (
		<SafeAreaView style={styles.chatRoom}>
			<FlatList
				data={messages}
				renderItem={({ item }) => <Message message={item} />}
				inverted
			/>
			<MessageInput
				value={message}
				onChange={setMessage}
				handlePress={handleMessage}
				chat={true}
			/>
		</SafeAreaView>
	);
};
