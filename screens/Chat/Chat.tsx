import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import { fetchFriends } from '../../redux/acshions/acshions.friends';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { ClientToServerEvents, ServerToClientEvents } from '../../../socket/types';
import { io, Socket } from 'socket.io-client';
import { styles } from './Chat.styles';
import { API_URL } from '../../service/auth-service';

export const Chat = () => {
	const dispatche = useDispatch();
	const { friends } = useTypedSelector((state) => state.friends);
	const { user } = useTypedSelector((state) => state.user);
	const [socket, setSocket] = useState(null);
	const { _id } = user!;
	const { error, loading } = useTypedSelector((state) => state.AppReducer);

	useEffect(() => {
		dispatche(fetchFriends());
	}, []);
	useEffect(() => {
		const sockets = io(API_URL, {
			transports: ['websocket'],
		});
		sockets.connect();
		setSocket(sockets);
	}, []);

	useEffect(() => {
		if (socket) {
			socket.emit('addUser');
		}
	}, [user]);

	return (
		<View style={styles.feed_page}>
			<FlatList
				data={friends}
				renderItem={({ item }) => {
					return <CardMessage item={item} myId={user && user._id} />;
				}}
			/>
		</View>
	);
};
