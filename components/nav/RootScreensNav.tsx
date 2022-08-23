import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerScreenStack } from './DrawerScreenStack';
import { ProfileScreenStack } from './NativeScreenStack';
import 'react-native-gesture-handler';

export const RootScreensNav = () => {
	const { tokens } = useTypedSelector((state) => state.user);
	const isAuth = async (): Promise<string | null> => {
		return await AsyncStorage.getItem('@auth');
	};

	return (
		<NavigationContainer>
			{tokens?.accesToken ? <DrawerScreenStack /> : <ProfileScreenStack />}
		</NavigationContainer>
	);
};
