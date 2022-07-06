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
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { createFormdata, createFoto } from '../../helpers/helper';
import { IMessage } from '../../types/types';
import EVENTS from '../../config/events';

export const ChatRoom = ({ route }: PropsChatRoom): JSX.Element => {
	let { id } = route.params;
	const [message, setMessage] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const dispatch = useDispatch();
	const { createMessage } = useActions();
	const { socket } = useTypedSelector((state) => state.SocketReducer);
	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { messages } = useTypedSelector((state) => state.messages);
	const { user } = useTypedSelector((state) => state.user);
	const [currentMessages, setCurrentMessages] = useState<IMessage[]>([]);

	const handleCreateFoto = async () => {
		const uri = await createFoto();
		setImage('');
		setImage(uri as string);
	};

	const handleMessage = () => {
		if (image) {
			const formData = createFormdata(image);
			createMessage(id, message, formData);
			setImage('');
		} else {
			createMessage(id, message, image);
		}
		setMessage('');
	};
	useEffect(() => {
		if (socket) {
			socket.on(EVENTS.SERVER.ROOM_MESSAGES, (allMessages) => {
				setCurrentMessages(allMessages);
			});
		}
	}, []);

	useEffect(() => {
		if (id) {
			dispatch(fetchMessages(id));
		}
	}, []);

	return (
		<SafeAreaView style={styles.chatRoom}>
			<TopBackMenu />
			{loading && (
				<View style={styles.loading}>
					<Text>Loading...</Text>
				</View>
			)}
			<FlatList
				data={currentMessages}
				renderItem={({ item }) => (
					<Message message={item} isMe={user?._id === item.user._id} />
				)}
				inverted
			/>
			<MessageInput
				value={message}
				onChange={setMessage}
				handlePress={handleMessage}
				handleCreateFoto={handleCreateFoto}
				chat={true}
			/>
		</SafeAreaView>
	);
};
