import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { IconMenu } from '../UI/icons/IconMenu';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerStackParams } from '../../App';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const HeaderMenu = () => {
	const singOut = async () => {
		//
	};

	return (
		<SafeAreaView style={{ marginHorizontal: 10 }}>
			<TouchableOpacity>
				<MaterialCommunityIcons name='logout' size={32} color='black' />
			</TouchableOpacity>
		</SafeAreaView>
	);
};
