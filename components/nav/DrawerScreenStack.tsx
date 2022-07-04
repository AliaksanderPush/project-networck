import 'react-native-gesture-handler';
import { Likes } from '../../screens/Likes/Likes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { HeaderMenu } from '../HeaderTabs/HeaderTabs';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { DrawerStackParams } from './RootScreensNav.props';
import People from '../../screens/People/People';
import { TabScreenStack } from './TabScreenStack';
import { TopBackMenu } from '../TopBackMenu/TopBackMenu';

const Drawer = createDrawerNavigator<DrawerStackParams>();

export const DrawerScreenStack = () => {
	return (
		<Drawer.Navigator
			initialRouteName='TabScreenStack'
			screenOptions={{
				drawerActiveTintColor: '#2BB24C',
				drawerInactiveTintColor: '#9B9B9B',
			}}
		>
			<Drawer.Screen
				name='Likes'
				component={Likes}
				options={{
					drawerIcon: ({ color }) => <AntDesign name='like1' size={32} color={color} />,
					headerRight: () => <HeaderMenu />,
				}}
			/>
			<Drawer.Screen
				name='People'
				component={People}
				options={{
					drawerIcon: ({ color }) => (
						<FontAwesome5 name='user-friends' size={32} color={color} />
					),
					headerRight: () => <HeaderMenu />,
				}}
			/>
			<Drawer.Screen
				name='TabScreenStack'
				component={TabScreenStack}
				options={{
					title: 'Profile',
					drawerIcon: ({ color }) => (
						<Octicons name='feed-person' size={32} color={color} />
					),
					headerRight: () => <HeaderMenu />,
					headerTitle: '',
				}}
			/>
		</Drawer.Navigator>
	);
};
