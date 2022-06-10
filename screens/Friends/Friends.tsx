import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import chatsRoomsData from '../../assets/damy-data/chatRoom';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import { styles } from './Friends.styles';

export const Friends = () => {
	return (
		<>
			<View style={styles.friends_page}>
				<FlatList
					data={chatsRoomsData}
					renderItem={({ item }) => <CardMessage chatRoom={item} />}
				/>
			</View>
		</>
	);
};
