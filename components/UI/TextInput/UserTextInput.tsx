import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { ITextInput }  from './UserTextInput.props'


export const UserInput = ({
	title,
	value,
	setValue,
	secureTextEntry = false,
	keyboardType = 'default',
	//onBlur,
	err = false,
}:ITextInput):JSX.Element => {
	return (
		<View style={{ marginHorizontal: 20 }}>
		<Text style={{ color: err ? 'red' : 'black' }}>{title}</Text>
			<TextInput
				secureTextEntry={secureTextEntry}
				keyboardType={keyboardType}
				//onBlur={onBlur}
				style={{
					borderColor: err ? 'red' : '#8e93a1',
					borderBottomWidth: 1,
					height: 48,
					borderBottomColor: '#8e93a1',
					marginBottom: 30,
				}}
				onChangeText={(text) => setValue(text)}
				value={value}
			/>
		</View>
	);
};