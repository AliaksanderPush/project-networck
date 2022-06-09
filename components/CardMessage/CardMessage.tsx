import React from 'react';
import { View, Text, Image } from 'react-native';
import { API_URL } from '../../service/auth-service';
import { styles } from './CardMessage.styles';

export const CardMessage = ({ chatRoom }: any) => {
	const user = chatRoom.users[1];
	return (
		<View style={styles.card_container}>
			<Image
				style={styles.user_avatar}
				source={{
					uri: user.imageUri,
				}}
			/>
			<View style={styles.bage_row}>
				<Text style={styles.bage_text}>4</Text>
			</View>
			<View style={styles.card_row}>
				<View style={styles.card_item}>
					<Text style={styles.name}>{user.name}</Text>
					<Text style={styles.message}>{chatRoom.lastMessage.createdAt}</Text>
				</View>
				<Text numberOfLines={1} ellipsizeMode='head' style={styles.message}>
					{chatRoom.lastMessage.content}
				</Text>
			</View>
		</View>
	);
};
