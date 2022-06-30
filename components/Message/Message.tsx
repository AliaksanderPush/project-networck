import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { IMessageProps } from './Messge.props';
import { styles } from './Message.styles';

export const Message = ({ message, id }: IMessageProps) => {
	const [isMe, setIsMe] = useState<boolean>(true);

	useEffect(() => {
		if (message.user._id && id) {
			const myMess = message.user._id === id;
			setIsMe(myMess);
		}
	}, [message, id]);

	return (
		<View
			style={[styles.message_container, isMe ? styles.rightContainer : styles.leftContainer]}
		>
			<Text style={{ color: isMe ? 'black' : 'white' }}>{message.text}</Text>
		</View>
	);
};
