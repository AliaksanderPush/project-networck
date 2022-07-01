import React, { useEffect, useState } from 'react';
import {
	View,
	TextInput,
	Pressable,
	KeyboardAvoidingView,
	Platform,
	TouchableOpacity,
} from 'react-native';
import {
	SimpleLineIcons,
	Feather,
	MaterialCommunityIcons,
	AntDesign,
	Ionicons,
} from '@expo/vector-icons';
import { colors } from '../../config/Colors';
import { IMessageInput } from './MessageInput.props';
import { styles } from './MessageInput.styles';

export const MessageInput = ({
	chat,
	onChange,
	value,
	handlePress,
	handleCreateFoto,
}: IMessageInput) => {
	const onPlusClicked = () => {
		console.warn('On plus clicked');
	};

	const onPress = () => {
		if (value) {
			handlePress();
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
				{chat && (
					<SimpleLineIcons
						name='emotsmile'
						size={24}
						color={colors.grayDarck}
						style={styles.icon}
					/>
				)}

				<TextInput
					style={styles.input}
					value={value}
					onChangeText={onChange}
					placeholder={chat ? 'Text message...' : 'Search post'}
				/>
				{chat && (
					<>
						<TouchableOpacity onPress={handleCreateFoto}>
							<Feather
								name='camera'
								size={24}
								color={colors.grayDarck}
								style={styles.icon}
							/>
						</TouchableOpacity>
						<MaterialCommunityIcons
							name='microphone-outline'
							size={24}
							color={colors.grayDarck}
							style={styles.icon}
						/>
					</>
				)}
			</View>
			{chat ? (
				<Pressable onPress={onPress} style={styles.buttons_container}>
					{value ? (
						<Ionicons name='send' size={18} color='white' />
					) : (
						<AntDesign name='plus' size={24} color='white' />
					)}
				</Pressable>
			) : (
				<Pressable onPress={handlePress} style={styles.buttons_container}>
					<Ionicons name='search' size={24} color='white' />
				</Pressable>
			)}
		</KeyboardAvoidingView>
	);
};
