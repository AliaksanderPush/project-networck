import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useEvent } from 'react-native-reanimated';
import chatsRoomsData from '../../assets/damy-data/chatRoom';
import { CardMessage } from '../../components/CardMessage/CardMessage';
import { styles } from './Friends.styles';

export const Friends = () => {
	useEvent(() => {}, []);

	return (
		<>
			<View style={styles.friends_page}></View>
		</>
	);
};
