import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export const Chat = () => {
	return (
		<>
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: 'green', fontSize: 30 }}>Cha</Text>
				<View>
					<Image
						style={{
							width: 190,
							height: 190,
							marginVertical: 20,
							borderRadius: 100,
						}}
						source={require('C:\\Users\\User\\Desktop\\Network\\client\\assets\\users\\e7a27bb3-d4e6-4949-a5f7-0dfd8938ae5c.jpeg')}
					/>
				</View>
			</View>
		</>
	);
};
