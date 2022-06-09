import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { CardMessage } from '../../components/CardMessage/CardMessage';

export const Chat = () => {
	return (
		<>
			<View style={{ padding: 20 }}>
				<CardMessage />
			</View>
		</>
	);
};
