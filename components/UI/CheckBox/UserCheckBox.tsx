import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { IUserCheckBox } from './UserCheckBox.props';

export const UserCheckBox = ({ checked, handleCheckBox, off }: IUserCheckBox): JSX.Element => {
	return (
		<>
			<BouncyCheckbox
			  	fillColor={'green'}
				unfillColor={'#FFFFFF'}
				isChecked={checked}
				onPress={(checked) => handleCheckBox(!checked)}
				disableBuiltInState={off}
			/>
		</>
	);
};
