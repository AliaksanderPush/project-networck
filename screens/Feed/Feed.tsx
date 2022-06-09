import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/core';
import { Message } from '../../components/Message/Message';
import chatRoomData from '../../assets/damy-data/chats';
import { MessageInput } from '../../components/MessageInput/MessageInput';

export function Feed() {
	//	const route = useRoute();
	//	const navigation = useNavigation();

	//console.warn('Displaying chat room: ', route.params?.id);

	//navigation.setOptions({ title: 'Elon Musk' });

	return (
		<SafeAreaView style={styles.page}>
			<FlatList
				data={chatRoomData.messages}
				renderItem={({ item }) => <Message message={item} />}
				inverted
			/>
			<MessageInput />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	page: {
		backgroundColor: 'white',
		flex: 1,
	},
});
