import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export const TopDrawerMenu = () => {
	const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.backButton}
				underlayColor='#f0ddcc'
				onPress={() => {
					navigation.openDrawer();
				}}
			>
				<MaterialIcons name='menu' color='#333' size={20} />
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
