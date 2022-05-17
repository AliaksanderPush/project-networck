import React from 'react';
import { View, Text} from 'react-native';

export const HomeScreen = ({ navigation }:any) => {
	return (
		<View>
			<Text>This Home Page</Text>
			<Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Signin')}>
				Go Sing In
			</Text>
		</View>
	);
};