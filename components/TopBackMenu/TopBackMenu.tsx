import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { IconBack } from '../UI/icons/IconBack';
import { useNavigation } from '@react-navigation/core';

export const TopBackMenu = () => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.backButton}
				underlayColor='#f0ddcc'
				onPress={() => {
					navigation.goBack();
				}}
			>
				<IconBack color='#333' size={20} />
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	backButton: {
		borderRadius: 8,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
