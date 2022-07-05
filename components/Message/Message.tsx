import React from 'react';
import { View, Text, Image } from 'react-native';
import { IMessageProps } from './Messge.props';
import { formatDateHour } from '../../helpers/helper';
import { styles } from './Message.styles';
import { Avatar } from '../Avatar/Avatar';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { API_URL } from '../../service/auth-service';

export const Message = ({ message, isMe }: IMessageProps): JSX.Element => {
	const { deleteMessage } = useActions();
	const time = formatDateHour(message.createdAt);
	const { user } = message;

	const handleDeleteMessage = () => {
		deleteMessage(message._id, message.friendBy);
	};

	return (
		<View>
			{isMe && (
				<TouchableOpacity
					style={{ marginLeft: 'auto', marginRight: 25 }}
					onPress={handleDeleteMessage}
				>
					<EvilIcons name='close-o' size={24} color='black' />
				</TouchableOpacity>
			)}

			<View
				style={[
					styles.message_container,
					isMe ? styles.rightContainer : styles.leftContainer,
				]}
			>
				{!!message.attachments && (
					<View>
						<Image
							style={{ width: 200, height: 200 }}
							source={{
								uri: `${API_URL}/${message.attachments}`,
							}}
						/>
					</View>
				)}

				<Text style={{ color: isMe ? 'black' : 'white' }}>{message.text}</Text>
				<Text style={{ color: isMe ? 'black' : 'white' }}>{time}</Text>
			</View>
			<View style={isMe ? styles.rightBox : styles.leftBox}>
				<Avatar border={false} path={user.avatar} size={40} />
			</View>
		</View>
	);
};
