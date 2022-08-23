import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { IPrimaryButton } from './PrimaryButton.props';
import { colors } from '../../../config/Colors';
import { styles } from './PrimaryButton.styles';

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
