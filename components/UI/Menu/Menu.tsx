import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './Menu.styles';

export const Menu = ({ name }: { name: string | undefined }) => {
	return (
		<>
			<View style={styles.menu}>
				<Text style={styles.text_menu}>{name?.toUpperCase()} joined</Text>
			</View>
		</>
	);
};
