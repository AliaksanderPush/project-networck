import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { UserCheckBox } from '../CheckBox/UserCheckBox';
import { styles } from './CheckBoxGroup.styles';

export const CheckBoxGroup = (): JSX.Element => {
	const [checkedMale, setCheckedMale] = useState<boolean>(false);

	const [checkedFemale, setCheckedFemale] = useState<boolean>(false);

	const [gender, setGender] = useState<string>('');

	const handleCheckedMale = () => {
		setCheckedMale(true);
		setCheckedFemale(false);
		setGender('male');
		return gender;
	};

	const handleCheckedFemale = () => {
		setCheckedMale(false);
		setCheckedFemale(true);
		setGender('female');
		return gender;
	};

	return (
		<View style={styles.checkBox_container}>
			<Text>Male</Text>
			<UserCheckBox
				checked={checkedMale}
				handleCheckBox={handleCheckedMale}
				off={checkedFemale ? true : false}
			/>
			<Text>Female</Text>
			<UserCheckBox
				checked={checkedFemale}
				handleCheckBox={handleCheckedFemale}
				off={checkedMale ? true : false}
			/>
		</View>
	);
};
