import React from 'react';
import { View, Text } from 'react-native';

export const Feed = ({ navigation }: any) => {
	return (
		<View>
			<Text>This feed Screen</Text>
			<Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Signin')}>
				Go Sing In
			</Text>
		</View>
	);
};