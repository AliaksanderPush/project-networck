import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { colors } from 'react-native-elements';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { PropsUdatePass } from './UpdatePassword.props';
import { styles } from './UpdatePassword.styles';
import { upDatepass } from '../../service/service';

export const UpdatePassword = ({ navigation }: PropsUdatePass): JSX.Element => {
	const [value, setValue] = useState<string>('');
	const [confirmValue, setConfirmValue] = useState<string>('');
	const { loading } = useTypedSelector((state) => state.user);

	const handleSubmit = async () => {
		if (value === confirmValue) {
			try {
				const response = await upDatepass(value);
				alert(response.data);
				navigation.navigate('Account');
			} catch (e: any) {
				alert(e.response.data);
			}
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
					label='Change Password'
					size={10}
					loading={loading}
					setValue={handleSubmit}
				/>
			</View>
		</View>
	);
};
