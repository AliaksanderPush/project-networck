import { styles } from './Message.styles';

import React from 'react';
import { View, Text } from 'react-native';
import { IMessageProps } from './Messge.props';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

const myID = 'u1';

export const Message = ({ message }: IMessageProps) => {
	const { user } = useTypedSelector((state) => state.user);
	const isMe = message.user._id === user?._id;

	return (
		<View
			style={[styles.message_container, isMe ? styles.rightContainer : styles.leftContainer]}
		>
			<Text style={{ color: isMe ? 'black' : 'white' }}>{message.text}</Text>
		</View>
	);
};
