import React, { useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import { fetchFriends } from '../../redux/acshions/acshions.friends';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { API_URL } from '../../service/auth-service';
import { ChatRoom } from '../ChatRoom/ChatRoom';
import { styles } from './Chat.styles';

export const Chat = () => {
	//const { fetchFriends } = useActions();
	const dispatche = useDispatch();
	const { friends } = useTypedSelector((state) => state.friends);
	const { error, loading } = useTypedSelector((state) => state.AppReducer);

	useEffect(() => {
		dispatche(fetchFriends());
	}, [dispatche]);
	return (
		<View style={styles.feed_page}>
			<FlatList
				data={friends}
				renderItem={({ item }) => {
					return <CardMessage item={item} />;
				}}
			/>
		</View>
	);
};
