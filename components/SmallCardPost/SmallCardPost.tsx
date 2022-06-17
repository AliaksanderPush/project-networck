import React from 'react';
import { View, Text, Image, Pressable, TouchableHighlight } from 'react-native';
import { styles } from './SmallCardPost.styles';

export const SmallCardPost = () => {
	const handlePress = () => {
		alert('press');
	};

	return (
		<TouchableHighlight onPress={handlePress}>
			<Image
				style={styles.image}
				source={{
					uri: 'https://cdn.pixabay.com/photo/2022/04/30/15/56/dandelion-7165893__340.jpg',
				}}
			/>
		</TouchableHighlight>
	);
};
