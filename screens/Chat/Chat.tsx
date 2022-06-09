import React, { useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import chatsRoomsData from '../../assets/damy-data/chatRoom';
import { styles } from './Chat.styles';

export const Chat = () => {
	return (
		<>
			<View style={styles.chat_page}>
				<FlatList
					data={chatsRoomsData}
					renderItem={({ item }) => <CardMessage chatRoom={item} />}
				/>
			</View>
		</>
	);
};
