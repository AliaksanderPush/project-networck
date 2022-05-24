import React from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { IconMenu } from '../UI/icons/IconMenu';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerStackParams } from '../../App';
import { Feather } from '@expo/vector-icons';

export const TopDrawerMenu = () => {
	const navigation = useNavigation<DrawerNavigationProp<DrawerStackParams>>();
	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity style={styles.backButton}>
				<Feather
					onPress={() => {
						navigation.openDrawer();
					}}
					name='menu'
					size={32}
					color='black'
				/>
			</TouchableOpacity>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		margin: 10,
	},
	backButton: {
		borderRadius: 8,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
