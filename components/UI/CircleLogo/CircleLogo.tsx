import React from 'react';
import { View, Image } from 'react-native';
import { Props } from './CircleLogo.props';
import { styles } from './CircleLogo.styles';

export const CircleLogo = ({ children }: Props): JSX.Element => {
	return (
		<View style={styles.container_image}>
			<View style={styles.wrap_image}>
				{children ? (
					children
				) : (
					<Image
						style={styles.logo_circle}
						source={{
							uri: 'C:\\Users\\User\\Desktop\\Express-Mong\\express-mongo\\build\\assets\\efe6faf7-a0a8-49a9-82ea-d8fe4d83d4ec.jpg',
						}}
					/>
				)}
			</View>
		</View>
	);
};
