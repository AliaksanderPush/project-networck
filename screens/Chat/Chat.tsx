import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import CardMessage from '../../components/CardMessage/CardMessage';
import { fetchFriends } from '../../redux/acshions/acshions.friends';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { fetchAllUsers } from '../../redux/acshions/acshions.user';
import EVENTS from '../../config/events';
import { Menu } from '../../components/UI/Menu/Menu';
import { styles } from './Chat.styles';

export const Chat = (): JSX.Element => {
	const dispatch = useDispatch();
	const { friends } = useTypedSelector((state) => state.friends);
	const { user, users } = useTypedSelector((state) => state.user);
	const { socket } = useTypedSelector((state) => state.SocketReducer);
	const [showModat, setShowModal] = useState<boolean>(false);
	const [currentUser, setCurrentUser] = useState<string>('');

	if (socket) {
		socket.on(EVENTS.SERVER.JOINED_ROOM, (currName: string) => {
			if (currName) {
				setCurrentUser(currName);
				setShowModal(true);
				setTimeout(() => {
					setShowModal(false);
					setCurrentUser('');
				}, 3000);
			}
		});
	}

	useEffect(() => {
		socket!.emit(EVENTS.CLIENT.JOIN_ROOM, user?.name);
	}, []);

	useEffect(() => {
		dispatch(fetchFriends(socket!));
		dispatch(fetchAllUsers());
	}, [dispatch]);

	console.log('stateid>>', currentUser);

	return (
		<View style={styles.feed_page}>
			{showModat && <Menu name={currentUser} />}
			{friends && (
				<FlatList
					data={friends}
					renderItem={({ item }) => {
						return <CardMessage users={users} item={item} myId={user?._id!} />;
					}}
				/>
			)}
		</View>
	);
};
