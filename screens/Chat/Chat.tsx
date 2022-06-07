import React from 'react';
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
						source={{
							uri: 'https://cdn.pixabay.com/photo/2022/05/22/12/08/baby-7213274_960_720.jpg',
						}}
					/>
				</View>
			</View>
		</>
	);
};
