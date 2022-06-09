import React from 'react';
import { View, Text, Image } from 'react-native';
import { API_URL } from '../../service/auth-service';
import { styles } from './CardMessage.styles';

export const CardMessage = () => {
	return (
		<View style={styles.card_container}>
			<Image
				style={styles.user_avatar}
				source={{ uri: `${API_URL}/d35e38b7-4e84-442a-b5c8-2af463ceba1a.jpg` }}
			/>
			<View style={styles.bage_row}>
				<Text style={styles.bage_text}>4</Text>
			</View>
			<View style={styles.card_row}>
				<View style={styles.card_item}>
					<Text style={styles.name}>Chat</Text>
					<Text style={styles.message}>11:30</Text>
				</View>
				<Text numberOfLines={1} ellipsizeMode='head' style={styles.message}>
					Hello frinds
				</Text>
			</View>
		</View>
	);
};
