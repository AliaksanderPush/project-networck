import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HeaderMenu = (): JSX.Element => {
	const { logOut } = useActions();

	const signOut = async () => {
		logOut();
		await AsyncStorage.removeItem('@auth');
	};

	return (
		<SafeAreaView style={{ marginHorizontal: 10 }}>
			<TouchableOpacity>
				<MaterialCommunityIcons onPress={signOut} name='logout' size={32} color='black' />
			</TouchableOpacity>
		</SafeAreaView>
	);
};
