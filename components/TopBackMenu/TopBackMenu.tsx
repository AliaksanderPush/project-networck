import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { IconBack } from '../UI/icons/IconBack';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../config/Colors';

export const TopBackMenu = (): JSX.Element => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.backButton}
				underlayColor={colors.blue}
				onPress={() => {
					navigation.goBack();
				}}
			>
				<IconBack color='#333' size={30} />
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
