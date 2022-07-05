import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { API_URL } from '../../service/auth-service';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ChatRoomStackParams } from '../nav/RootScreensNav.props';
import { styles } from './CardMessage.styles';
import { ICartMessageProps } from './CartMessage.props';
import { formatDateTime } from '../../helpers/helper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IUser } from '../../user/User.props';

export const CardMessage = ({ item, myId, users }: ICartMessageProps) => {
	const { friends, messages } = item;
	const [friend, setfriend] = useState<IUser | null>(null);
	const data = formatDateTime(messages[messages.length - 1].createdAt);
	const navigation = useNavigation<NativeStackNavigationProp<ChatRoomStackParams, 'ChatRoom'>>();

	const handleNavigateToUser = () => {
		navigation.navigate('ChatRoom', { id: item._id });
	};

	useEffect(() => {
		const friendId = friends.filter((item) => item !== myId);
		const myFriend = users.find((item) => item._id === friendId[0]);
		if (myFriend) {
			setfriend(myFriend);
		}
	}, []);

	return (
		<TouchableOpacity onPress={handleNavigateToUser} style={styles.card_container}>
			<Image
				style={styles.user_avatar}
				source={{
					uri: `${API_URL}/${friend?.avatar}`,
				}}
			/>
			<View style={styles.bage_row}>
				<Text style={styles.bage_text}>4</Text>
			</View>
			<View style={styles.card_row}>
				<View style={styles.card_item}>
					<Text style={styles.name}>{friend?.name}</Text>
					<Text style={styles.message}>{data}</Text>
				</View>
				<Text numberOfLines={1} ellipsizeMode='head' style={styles.message}>
					{messages[messages.length - 1].text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
