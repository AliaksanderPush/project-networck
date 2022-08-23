import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { IInfoInput } from './InfoInput.props';

export const InfoInput = ({
	value,
	setValue,
	size,
	position,
	placehold,
}: IInfoInput): JSX.Element => {
	return (
		<View>
			<TextInput
				style={{
					height: size,
					width: '100%',
					marginBottom: 10,
					borderRadius: 20,
					padding: 10,
					textAlignVertical: position,
					backgroundColor: '#fff',
				}}
				multiline={position === 'top' ? true : false}
				numberOfLines={4}
				onChangeText={(text) => setValue(text)}
				value={value}
				placeholder={placehold}
			/>
		</View>
	);
};
