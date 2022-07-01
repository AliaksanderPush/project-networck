import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { API_URL } from '../../service/auth-service';
import { IAvatar } from './Avatar.props';
import { styles } from './Avatar.styles';

export const Avatar = ({ path, size, border }: IAvatar): JSX.Element => {
	return (
		<View
			style={[
				styles.container,
				border && styles.border_with,
				{ width: size + 6, height: size + 6 },
			]}
		>
			<Image
				source={{
					uri: `${API_URL}/${path}`,
				}}
				style={[styles.image, { width: size, height: size }]}
			/>
		</View>
	);
};
