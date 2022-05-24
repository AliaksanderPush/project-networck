/*
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParams, ButtomStackParams, DrawerStackParams } from './ScreensNav.props';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { SignIn } from '../../screens/SingIn/SingIn';
import { SignUp } from '../../screens/SingUp/SingUp';
import { Friends } from '../../screens/Friends/Friends';
import { Likes } from '../../screens/Likes/Likes';

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

export const TabScreenStack = () => {
	return (
		<ButtomStack.Navigator
			screenOptions={{
				tabBarActiveTintColor: '#2BB24C',
				tabBarInactiveTintColor: '#9B9B9B',
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
					headerRight: () => <HeaderMenu />,
					headerLeft: () => <TopDrawerMenu />,
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
*/
