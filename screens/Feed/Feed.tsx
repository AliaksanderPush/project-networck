import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export const Feed = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<View>
				<TouchableOpacity style={{ alignItems: 'center' }}>
					<Entypo name='camera' size={25} color='black' />
				</TouchableOpacity>
			</View>
		</View>
	);
};
