import 'react-native-gesture-handler';
import { SignUp } from '../../screens/SingUp/SingUp';
import { SignIn } from '../../screens/SingIn/SingIn';
import { Chat } from '../../screens/Chat/Chat';
import { Feed } from '../../screens/Feed/Feed';
import { Likes } from '../../screens/Likes/Likes';
import { Friends } from '../../screens/Friends/Friends';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account } from '../../screens/Account/Account';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { HeaderMenu } from '../HeaderTabs/HeaderTabs';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtomStackParams, DrawerStackParams, RootStackParams } from './RootScreensNav.props';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<RootStackParams>();

const ProfileScreenStack = () => {
	return (
		<Stack.Navigator
			initialRouteName='SignIn'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='SignIn' component={SignIn} />
			<Stack.Screen name='SignUp' component={SignUp} />
		</Stack.Navigator>
	);
};

const ButtomStack = createBottomTabNavigator<ButtomStackParams>();

const TabScreenStack = () => {
	return (
		<ButtomStack.Navigator
			initialRouteName='Account'
			screenOptions={{
				tabBarActiveTintColor: '#2BB24C',
				tabBarInactiveTintColor: '#9B9B9B',
				headerShown: false,
			}}
		>
			<ButtomStack.Screen
				name='Account'
				component={Account}
				options={{
					title: 'Profile',
					tabBarIcon: ({ focused, color }) => (
						<Octicons name='feed-person' focused={focused} size={32} color={color} />
					),
					headerRight: () => <HeaderMenu />,
				}}
			/>
			<ButtomStack.Screen
				name='Chat'
				component={Chat}
				options={{
					tabBarIcon: ({ color }) => <AntDesign name='wechat' size={32} color={color} />,
					headerRight: () => <HeaderMenu />,
				}}
			/>
			<ButtomStack.Screen
				name='Feed'
				component={Feed}
				options={{
					tabBarIcon: ({ color }) => (
						<Octicons name='feed-heart' size={32} color={color} />
					),
					headerRight: () => <HeaderMenu />,
				}}
			/>
			<ButtomStack.Screen
				name='Profile'
				component={ProfileScreenStack}
				options={{
					title: 'Sign',
					tabBarIcon: ({ color }) => (
						<MaterialIcons name='app-registration' size={32} color={color} />
					),
					headerRight: () => <HeaderMenu />,
				}}
			/>
		</ButtomStack.Navigator>
	);
};

const Drawer = createDrawerNavigator<DrawerStackParams>();

const DrawerScreenStack = () => {
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
				name='Friends'
				component={Friends}
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
				}}
			/>
		</Drawer.Navigator>
	);
};

export const RootScreensNav = () => {
	const { user } = useTypedSelector((state) => state.user);

	const isAuth = async (): Promise<string | null> => {
		return await AsyncStorage.getItem('@auth');
	};

	return (
		<NavigationContainer>
			{user ? <DrawerScreenStack /> : <ProfileScreenStack />}
		</NavigationContainer>
	);
};
