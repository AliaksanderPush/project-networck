import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { API_URL } from '../../service/auth-service';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatRoomStackParams } from '../nav/RootScreensNav.props';
import { styles } from './CardMessage.styles';
import { IPost } from '../../user/User.props';
import { ICartMessageProps } from './CartMessage.props';
import { formatDateTime } from '../../helpers/helper';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CardMessage = ({ item }: ICartMessageProps) => {
	const { userId } = item;
	const data = formatDateTime(userId.created_at);

	/*

	const navigation = useNavigation<NativeStackNavigationProp<ChatRoomStackParams>>();

	const handleNavigateToUser = () => {
		navigation.navigate('ChatRoom', { id: chatRoom.id });
	};
 */
	const handlePress = () => {
		alert(userId._id);
	};

	return (
		<TouchableOpacity onPress={handlePress} style={styles.card_container}>
			<Image
				style={styles.user_avatar}
				source={{
					uri: `${API_URL}/${userId.avatar}`,
				}}
			/>
			<View style={styles.bage_row}>
				<Text style={styles.bage_text}>4</Text>
			</View>
			<View style={styles.card_row}>
				<View style={styles.card_item}>
					<Text style={styles.name}>{userId.name}</Text>
					<Text style={styles.message}>{data}</Text>
				</View>
				<Text numberOfLines={1} ellipsizeMode='head' style={styles.message}>
					Hove are you
				</Text>
			</View>
		</TouchableOpacity>
	);
};
