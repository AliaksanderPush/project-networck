import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import { IInfoInput } from './InfoInput.props';

export const InfoInput = ({ value, setValue, size, position }: IInfoInput): JSX.Element => {
	return (
		<View>
			<TextInput
				style={{
					height: size,
					width: '100%',
					marginBottom: 10,
					borderWidth: 1,
					padding: 10,
					textAlignVertical: position,
				}}
				multiline={position === 'top' ? true : false}
				numberOfLines={4}
				onChangeText={(text) => setValue(text)}
				value={value}
			/>
		</View>
	);
};
