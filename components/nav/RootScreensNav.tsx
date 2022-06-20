import 'react-native-gesture-handler';
import { SignUp } from '../../screens/SingUp/SingUp';
import { SignIn } from '../../screens/SingIn/SingIn';
import { Chat } from '../../screens/Chat/Chat';
import { Feed } from '../../screens/Feed/Feed';
import { Likes } from '../../screens/Likes/Likes';
import { MyPosts } from '../../screens/MyPosts/MyPosts';
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
import {
	AcccountStackParams,
	ButtomStackParams,
	ChatRoomStackParams,
	DrawerStackParams,
	RootStackParams,
} from './RootScreensNav.props';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { UpdateProfile } from '../../screens/UpdatePassword/UpdateProfile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ChatRoom } from '../../screens/ChatRoom/ChatRoom';
import { FogotPassword } from '../../screens/FogotPassword/FogotPassword';
import { AddPost } from '../../screens/AddPost/AddPost';

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
			<Stack.Screen name='FogotPassword' component={FogotPassword} />
		</Stack.Navigator>
	);
};

const AccountStack = createNativeStackNavigator<AcccountStackParams>();

const AcountScreenStack = () => {
	return (
		<AccountStack.Navigator
			initialRouteName='Account'
			screenOptions={{
				headerShown: false,
			}}
		>
			<AccountStack.Screen name='Account' component={Account} />
			<AccountStack.Screen name='UpdateProfile' component={UpdateProfile} />
		</AccountStack.Navigator>
	);
};

const ChatRoomStack = createNativeStackNavigator<ChatRoomStackParams>();

const ChatRoomScreenStack = () => {
	return (
		<ChatRoomStack.Navigator
			initialRouteName='Friends'
			screenOptions={{
				headerShown: false,
			}}
		>
			<ChatRoomStack.Screen name='Friends' component={Feed} />
			<ChatRoomStack.Screen name='ChatRoom' component={ChatRoom} />
		</ChatRoomStack.Navigator>
	);
};

const ButtomStack = createBottomTabNavigator<ButtomStackParams>();

const TabScreenStack = () => {
	return (
		<ButtomStack.Navigator
			initialRouteName='AcountScreenStack'
			screenOptions={{
				tabBarActiveTintColor: '#2BB24C',
				tabBarInactiveTintColor: '#9B9B9B',
				headerShown: false,
			}}
		>
			<ButtomStack.Screen
				name='AcountScreenStack'
				component={AcountScreenStack}
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
				name='Post'
				component={AddPost}
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialIcons name='add-circle' size={32} color={color} />
					),
					headerRight: () => <HeaderMenu />,
				}}
			/>
			<ButtomStack.Screen
				name='ChatRoomScreenStack'
				component={ChatRoomScreenStack}
				options={{
					title: 'Feed',
					tabBarIcon: ({ color }) => (
						<Octicons name='feed-discussion' size={32} color={color} />
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
				name='Posts'
				component={MyPosts}
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
