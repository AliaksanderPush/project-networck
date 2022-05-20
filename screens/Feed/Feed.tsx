import React from 'react';
import { View, Text } from 'react-native';
import { TopDrawerMenu } from '../../components/TopDrawerMenu/TopDrawerMenu';

export const Feed = () => {
	return (
		<>
			<View>
				<TopDrawerMenu />
			</View>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: 'blue', fontSize: 30 }}>Feed</Text>
			</View>
		</>
	);
};