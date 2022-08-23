import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { ISmallCard } from './SmallCardPosts.props';
import { API_URL } from '../../service/auth-service';
import { styles } from './SmallCardPost.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AcccountStackParams } from '../nav/RootScreensNav.props';

export const SmallCardPost = ({ img, cardId }: ISmallCard): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<AcccountStackParams>>();

	const handlePress = () => {
		navigation.navigate('MyPost', { id: cardId });
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
