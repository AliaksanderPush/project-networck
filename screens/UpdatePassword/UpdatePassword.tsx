import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { colors } from 'react-native-elements';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { PropsUdatePass } from './UpdatePassword.props';
import { styles } from './UpdatePassword.styles';

export const UpdatePassword = ({ navigation }: PropsUdatePass): JSX.Element => {
	const [value, setValue] = useState<string>('');
	const [confirmValue, setConfirmValue] = useState<string>('');
	const { upDatePassword } = useActions();
	const { loading } = useTypedSelector((state) => state.user);

	const handleSubmit = () => {
		if (value === confirmValue) {
			upDatePassword(value);
			navigation.navigate('Account');
		} else {
			alert('Password passwords do not match!');
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title_pass_input}>Enter you new password 👍</Text>
			<UserInput
				title={'PASSWORD'}
				secureTextEntry={true}
				setValue={setValue}
				value={value}
			/>

			<UserInput
				title={'CONFIRM YOU PASSWORD'}
				secureTextEntry={true}
				setValue={setConfirmValue}
				value={confirmValue}
			/>
			<View style={styles.pass_button}>
				<PrimaryButton
					buttonBg={colors.primary}
					text={colors.white}
					label={loading ? 'Please wait...' : 'Change password'}
					setValue={handleSubmit}
				/>
			</View>
		</View>
	);
};
