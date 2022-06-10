import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { IPrimaryButton } from './PrimaryButton.props';
import { colors } from '../../../config/Colors';

export const PrimaryButton = ({
	buttonBg,
	text,
	label,
	setValue,
	loading,
	size,
}: IPrimaryButton): JSX.Element => {
	const buttonBackground = buttonBg || colors.primary;
	const textColor = text || colors.secondary;
	const textLabel = label;
	const sizeBtn = size || 5;

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={setValue}
				style={[styles.button, { backgroundColor: buttonBackground, padding: sizeBtn }]}
			>
				<Text style={[styles.text, { color: textColor }]}>
					{!loading ? textLabel : 'Please wait...'}
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export const styles = StyleSheet.create({
	container: {
		width: '100%',
	},
	button: {
		borderRadius: 7,
	},
	text: {
		textAlign: 'center',
		fontSize: 20,
	},
});
