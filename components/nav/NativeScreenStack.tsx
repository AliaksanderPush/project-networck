import React from 'react';
import { SignUp } from '../../screens/SingUp/SingUp';
import { SignIn } from '../../screens/SingIn/SingIn';
import Feed from '../../screens/Feed/Feed';
import { MyPost } from '../../screens/MyPosts/MyPost';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../../screens/Account/Account';
import {
	AcccountStackParams,
	ChatRoomStackParams,
	FeedStackParams,
	RootStackParams,
} from './RootScreensNav.props';
import { UpdateProfile } from '../../screens/UpdateProfile/UpdateProfile';
import { ChatRoom } from '../../screens/ChatRoom/ChatRoom';
import { FogotPassword } from '../../screens/FogotPassword/FogotPassword';
import { UpdatePost } from '../../screens/UpdatePost/UpdatePost';
import 'react-native-gesture-handler';
import { AddComment } from '../../screens/AddComment/AddComment';
import { Comments } from '../../screens/Comments/Comments';
import { PostDetails } from '../../screens/PostDetails/PostDetails';
import { Chat } from '../../screens/Chat/Chat';

const Stack = createNativeStackNavigator<RootStackParams>();

export const ProfileScreenStack = () => {
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

export const AcountScreenStack = () => {
	return (
		<AccountStack.Navigator
			initialRouteName='Account'
			screenOptions={{
				headerShown: false,
			}}
		>
			<AccountStack.Screen name='Account' component={Account} />
			<AccountStack.Screen name='UpdateProfile' component={UpdateProfile} />
			<AccountStack.Screen name='MyPost' component={MyPost} />
			<AccountStack.Screen name='UpdatePost' component={UpdatePost} />
		</AccountStack.Navigator>
	);
};

const FeedStack = createNativeStackNavigator<FeedStackParams>();

export const FeedScreenStack = () => {
	return (
		<FeedStack.Navigator
			initialRouteName='Feed'
			screenOptions={{
				headerShown: false,
			}}
		>
			<FeedStack.Screen name='Feed' component={Feed} />
			<FeedStack.Screen name='AddComment' component={AddComment} />
			<FeedStack.Screen name='Comments' component={Comments} />
			<FeedStack.Screen name='PostDetails' component={PostDetails} />
		</FeedStack.Navigator>
	);
};

const ChatRoomStack = createNativeStackNavigator<ChatRoomStackParams>();

export const ChatRoomScreenStack = () => {
	return (
		<ChatRoomStack.Navigator
			initialRouteName='Friends'
			screenOptions={{
				headerShown: false,
			}}
		>
			<ChatRoomStack.Screen name='Friends' component={Chat} />
			<ChatRoomStack.Screen name='ChatRoom' component={ChatRoom} />
		</ChatRoomStack.Navigator>
	);
};
