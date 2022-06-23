import 'react-native-gesture-handler';
import { Feed } from '../../screens/Feed/Feed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { HeaderMenu } from '../HeaderTabs/HeaderTabs';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { ButtomStackParams } from './RootScreensNav.props';
import { AddPost } from '../../screens/AddPost/AddPost';
import {
	AcountScreenStack,
	ChatRoomScreenStack,
	FeedScreenStack,
	ProfileScreenStack,
} from './NativeScreenStack';
import { colors } from '../../config/Colors';

const ButtomStack = createBottomTabNavigator<ButtomStackParams>();

export const TabScreenStack = () => {
	return (
		<ButtomStack.Navigator
			initialRouteName='AcountScreenStack'
			screenOptions={{
				tabBarActiveTintColor: colors.primary,
				tabBarInactiveTintColor: colors.grayDarck,
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
				name='ChatRoomScreenStack'
				component={ChatRoomScreenStack}
				options={{
					title: 'Chat',
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
				name='FeedScreenStack'
				component={FeedScreenStack}
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
