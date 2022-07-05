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

	useEffect(() => {
		if (socket) {
			dispatch(fetchFriends(socket));
		}

		dispatch(fetchAllUsers());
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on(EVENTS.SERVER.JOINED_ROOM, (myId: string) => {
				setShowModal(true);
			});
		}
		setTimeout(() => {
			setShowModal(false);
		}, 3000);
	}, []);

	if (!friends) {
		return <View></View>;
	}

	return (
		<View style={styles.feed_page}>
			{showModat && <Menu name={user?.name && user?.name} />}
			<FlatList
				data={friends}
				renderItem={({ item }) => {
					return <CardMessage users={users} item={item} myId={user && user._id} />;
				}}
			/>
		</View>
	);
};
