import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { IUserCheckBox } from './UserCheckBox.props';

export const UserCheckBox = ({
	checked,
	handleCheckBox,
	off,
	text,
}: IUserCheckBox): JSX.Element => {
	return (
		<>
			<BouncyCheckbox
				text={text}
				fillColor={'green'}
				unfillColor={'#FFFFFF'}
				isChecked={checked}
				onPress={(checked) => handleCheckBox(!checked)}
				disableBuiltInState={off}
			/>
		</>
	);
};
