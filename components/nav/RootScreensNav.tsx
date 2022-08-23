import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { DrawerScreenStack } from './DrawerScreenStack';
import { ProfileScreenStack } from './NativeScreenStack';
import 'react-native-gesture-handler';

export const RootScreensNav = (): JSX.Element => {
	const { tokens } = useTypedSelector((state) => state.user);

	return (
		<NavigationContainer>
			{tokens?.accesToken ? <DrawerScreenStack /> : <ProfileScreenStack />}
		</NavigationContainer>
	);
};
