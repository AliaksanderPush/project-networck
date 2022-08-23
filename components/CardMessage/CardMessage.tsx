import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { API_URL } from '../../service/auth-service';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatRoomStackParams } from '../nav/RootScreensNav.props';
import { styles } from './CardMessage.styles';

export const CardMessage = ({ chatRoom }: any) => {
	const user = chatRoom.users[1];
	const navigation = useNavigation<NativeStackNavigationProp<ChatRoomStackParams>>();

	const handleNavigateToUser = () => {
		navigation.navigate('ChatRoom', { id: chatRoom.id });
	};

	return (
		<Pressable onPress={handleNavigateToUser} style={styles.card_container}>
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
		</Pressable>
	);
};
