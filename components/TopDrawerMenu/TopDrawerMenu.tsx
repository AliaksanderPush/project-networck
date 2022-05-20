import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { IconMenu } from '../UI/icons/IconMenu';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerStackParams } from '../../App';
import { AntDesign } from '@expo/vector-icons';

export const TopDrawerMenu = () => {
	const navigation = useNavigation<DrawerNavigationProp<DrawerStackParams>>();
	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.backButton}
				underlayColor='#f0ddcc'
				onPress={() => {
					navigation.openDrawer();
				}}
			>
				<IconMenu color='#333' size={32} />
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
