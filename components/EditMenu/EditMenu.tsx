import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { colors } from '../../config/Colors';
import { IEditMenu } from './EditMenu.props';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AcccountStackParams, ButtomStackParams } from '../nav/RootScreensNav.props';

export const EditMenu = ({ path, postId }: IEditMenu) => {
	const navigation = useNavigation<NativeStackNavigationProp<AcccountStackParams>>();

	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.backButton}
				underlayColor={colors.blue}
				onPress={() => {
					navigation.navigate(path, postId ? { id: postId } : undefined);
				}}
			>
				<FontAwesome name='edit' size={32} color='black' />
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
