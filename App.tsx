import { SignUp } from './screens/SingUp/SingUp';
import { SignIn } from './screens/SingIn/SingIn';
import { Chat } from './screens/Chat/Chat';
import { Feed } from './screens/Feed/Feed';
import { Likes } from './screens/Likes/Likes';
import { Friends } from './screens/Friends/Friends';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account } from './screens/Account/Account';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import React from 'react';

export type RootStackParams = {
	SignUp: undefined;
	SignIn: undefined;
	TabScreenStack: undefined;
};

export type ButtomStackParams = {
	Chat: undefined;
	Feed: undefined;
	Account: undefined;
};

export type DrawerStackParams = {
	Friends: undefined;
	Likes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();
const ButtomStack = createBottomTabNavigator<ButtomStackParams>();
const Drawer = createDrawerNavigator<DrawerStackParams>();

export const AuthScreenStack = () => {
	return (
		<Stack.Navigator
			initialRouteName='SignIn'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='SignIn' component={SignIn} />
			<Stack.Screen name='SignUp' component={SignUp} />
			<Stack.Screen name='TabScreenStack' component={TabScreenStack} />
		</Stack.Navigator>
	);
};

const TabScreenStack = () => {
	return (
		<ButtomStack.Navigator
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
					tabBarIcon: ({ focused, size, color }) => (
						<Octicons name='feed-person' size={32} color={color} />
					),
				}}
			/>
			<ButtomStack.Screen
				name='Chat'
				component={Chat}
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<AntDesign name='wechat' size={32} color={color} />
					),
				}}
			/>
			<ButtomStack.Screen
				name='Feed'
				component={Feed}
				options={{
					tabBarIcon: ({ focused, size, color }) => (
						<Octicons name='feed-heart' size={32} color={color} />
					),
				}}
			/>
		</ButtomStack.Navigator>
	);
};

export const DrawerScreenStack = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Likes'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen name='Likes' component={Likes} />
			<Drawer.Screen name='Friends' component={Friends} />
		</Drawer.Navigator>
	);
};

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
					<AuthScreenStack />
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
