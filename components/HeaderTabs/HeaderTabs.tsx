import React from 'react';
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const HeaderMenu = (): JSX.Element => {
	const { logOut } = useActions();

	return (
		<SafeAreaView style={{ marginHorizontal: 10 }}>
			<TouchableOpacity>
				<MaterialCommunityIcons onPress={logOut} name='logout' size={32} color='black' />
			</TouchableOpacity>
		</SafeAreaView>
	);
};
