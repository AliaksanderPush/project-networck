import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import { fetchFriends } from '../../redux/acshions/acshions.friends';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { io, Socket } from 'socket.io-client';
import { styles } from './Chat.styles';
import { fetchAllUsers } from '../../redux/acshions/acshions.user';

export const Chat = () => {
	const dispatch = useDispatch();
	const { friends } = useTypedSelector((state) => state.friends);
	const { user, users } = useTypedSelector((state) => state.user);
	const { socket } = useTypedSelector((state) => state.SocketReducer);
	const { _id } = user!;
	const { error, loading } = useTypedSelector((state) => state.AppReducer);

	useEffect(() => {
		dispatch(fetchFriends());
		dispatch(fetchAllUsers());
	}, []);

	useEffect(() => {
		if (socket) {
			//socket.emit('addUser', user?._id);
		}
	}, [user]);

	return (
		<View style={styles.feed_page}>
			<FlatList
				data={friends}
				renderItem={({ item }) => {
					return <CardMessage users={users} item={item} myId={user && user._id} />;
				}}
			/>
		</View>
	);
};
