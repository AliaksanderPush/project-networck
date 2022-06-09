import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './CardMessage.styles';

export const CardMessage = () => {
	return (
		<View style={styles.card_container}>
			<Image
				style={styles.user_avatar}
				source={require('C:\\Users\\Alexander\\Desktop\\networck\\client\\assets\\users\\cc358a33-c4a6-495e-9fe9-2abaf01e42cd.jpeg')}
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
