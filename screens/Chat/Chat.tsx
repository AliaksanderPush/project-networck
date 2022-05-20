import React from 'react';
import { View, Text } from 'react-native';
import { TopDrawerMenu } from '../../components/TopDrawerMenu/TopDrawerMenu';

export const Chat = () => {
	return (
		<>
			<View>
				<TopDrawerMenu />
			</View>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: 'green', fontSize: 30 }}>Chat</Text>
			</View>
		</>
	);
};
