import React from 'react';
import { View, Image } from 'react-native';
import { CircleLogoProps } from './CircleLogo.props';
import { styles } from './CircleLogo.styles';

export const CircleLogo = ({ children }: CircleLogoProps) => {
	return (
		<View style={styles.container_image}>
			<View style={styles.wrap_image}>
				{children ? (
					children
				) : (
					<Image
						style={styles.logo_circle}
						source={require('../../../assets/images/profile.png')}
					/>
				)}
			</View>
		</View>
	);
};
