import { styles } from './Message.styles';

import React from 'react';
import { View, Text } from 'react-native';

const myID = 'u1';

export const Message = ({ message }: any) => {
	const isMe = message.user.id === myID;

	return (
		<View
			style={[styles.message_container, isMe ? styles.rightContainer : styles.leftContainer]}
		>
			<Text style={{ color: isMe ? 'black' : 'white' }}>{message.content}</Text>
		</View>
	);
};
