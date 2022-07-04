import React from 'react';
import { View, Text } from 'react-native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

export const Likes = () => {
	const { socket } = useTypedSelector((state) => state.SocketReducer);
	return (
		<>
			<View></View>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: 'green', fontSize: 30 }}>{socket?.id}</Text>
			</View>
		</>
	);
};
