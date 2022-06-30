import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import { Message } from '../../components/Message/Message';
import { MessageInput } from '../../components/MessageInput/MessageInput';
import { styles } from './ChatRoom.styles';
import { PropsChatRoom } from './ChatRoom.props';
import { useDispatch } from 'react-redux';
import { fetchMessages } from '../../redux/acshions/acshions.messages';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const ChatRoom = ({ navigation, route }: PropsChatRoom) => {
	let { id } = route.params;
	const [message, setMessage] = useState<string>('');
	const dispatch = useDispatch();
	const { createMessage } = useActions();
	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { messages } = useTypedSelector((state) => state.messages);
	const { user } = useTypedSelector((state) => state.user);

	navigation.setOptions({ title: 'Elon Musk' });

	const handleMessage = () => {
		createMessage(id, message);
		setMessage('');
	};

	useEffect(() => {
		if (id) {
			dispatch(fetchMessages(id));
		}
	}, [dispatch]);

	return (
		<SafeAreaView style={styles.chatRoom}>
			{loading && (
				<View style={styles.loading}>
					<Text>Loading...</Text>
				</View>
			)}
			<FlatList
				data={messages}
				renderItem={({ item }) => <Message message={item} id={user?._id} />}
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
