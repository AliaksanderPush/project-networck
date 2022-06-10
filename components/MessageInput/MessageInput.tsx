import React, { useState } from 'react';
import { View, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native';

import {
	SimpleLineIcons,
	Feather,
	MaterialCommunityIcons,
	AntDesign,
	Ionicons,
} from '@expo/vector-icons';
import { styles } from './MessageInput.styles';
import { colors } from '../../config/Colors';

export const MessageInput = () => {
	const [message, setMessage] = useState<string>('');

	const sendMessage = () => {
		// send message
		console.warn('sending: ', message);

		setMessage('');
	};

	const onPlusClicked = () => {
		console.warn('On plus clicked');
	};

	const onPress = () => {
		if (message) {
			sendMessage();
		} else {
			onPlusClicked();
		}
	};

	return (
		<KeyboardAvoidingView
			style={styles.inp_message_container}
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			keyboardVerticalOffset={100}
		>
			<View style={styles.input_message_wrap}>
				<SimpleLineIcons
					name='emotsmile'
					size={24}
					color={colors.grayDarck}
					style={styles.icon}
				/>

				<TextInput
					style={styles.input}
					value={message}
					onChangeText={setMessage}
					placeholder='Text message...'
				/>

				<Feather name='camera' size={24} color={colors.grayDarck} style={styles.icon} />
				<MaterialCommunityIcons
					name='microphone-outline'
					size={24}
					color={colors.grayDarck}
					style={styles.icon}
				/>
			</View>
			<Pressable onPress={onPress} style={styles.buttons_container}>
				{message ? (
					<Ionicons name='send' size={18} color='white' />
				) : (
					<AntDesign name='plus' size={24} color='white' />
				)}
			</Pressable>
		</KeyboardAvoidingView>
	);
};
