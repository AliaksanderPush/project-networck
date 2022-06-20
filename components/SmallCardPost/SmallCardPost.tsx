import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Props } from './SmallCardPosts.props';
import { API_URL } from '../../service/auth-service';
import { styles } from './SmallCardPost.styles';

export const SmallCardPost = ({ img }: Props): JSX.Element => {
	const handlePress = () => {
		alert('press');
	};

	return (
		<TouchableOpacity onPress={handlePress}>
			<Image
				style={styles.image}
				source={{
					uri: `${API_URL}/${img}`,
				}}
			/>
		</TouchableOpacity>
	);
};
