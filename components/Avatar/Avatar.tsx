import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './Avatar.styles';

export const Avatar = ({ uri, size = 70 }: any) => (
	<View style={[styles.container, { width: size + 6, height: size + 6 }]}>
		<Image
			source={{
				uri: 'https://media.istockphoto.com/photos/portrait-of-young-smiling-woman-face-partially-covered-with-flying-picture-id1297159365?b=1&k=20&m=1297159365&s=170667a&w=0&h=ojvU4Sbp8Wcu1rbE5bVx9dn0KOIAvDtpDmUfg7mLAOk=',
			}}
			style={[styles.image, { width: size, height: size }]}
		/>
	</View>
);
