import React from 'react';
import { View, Switch } from 'react-native';
import {IUserSwitch} from './UserSwitch.props'

export const UserSwitch = ({ toggleSwitch, value }:IUserSwitch):JSX.Element => {
	return (
		<View>
			<Switch
				trackColor={{ false: '#767577', true: '#81b0ff' }}
				thumbColor={value ? '#f5dd4b' : '#f4f3f4'}
				ios_backgroundColor='#3e3e3e'
				onValueChange={toggleSwitch}
				value={value}
			/>
		</View>
	);
};