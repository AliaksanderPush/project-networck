import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { useForm, Controller } from 'react-hook-form';
import { emailValidate } from '../../validate/validate';
import { PropsFogotPassword } from './FogotPassword.props';
import { styles } from './FogotPassword.styles';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { IPropsEmail } from './FogotPassword.props';
import { fogotPassword, resetPassword } from '../../service/service';

export const FogotPassword = ({ navigation }: PropsFogotPassword): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [vizible, setVizible] = useState<boolean>(false);
	const [newPassword, setNewPassword] = useState<string>('');
	const [resetCode, setResetCode] = useState<string>('');

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (info: IPropsEmail) => {
		setLoading(true);
		const { email } = info;
		try {
			const { data } = await fogotPassword(email);
			setLoading(false);
			alert(`Enter the password reset code we sent in your email =>${data}`);
			setVizible(true);
		} catch (err: any) {
			alert(err.response.data);
			setLoading(false);
		}
	};

	const handleRsetPassword = async () => {
		console.log('dannie>', newPassword, resetCode);
		if (!newPassword || !resetCode) {
			alert('NewPassword or ResetCode is require!');
			return;
		}
		try {
			await resetPassword(newPassword, resetCode);
			setLoading(false);
			setNewPassword('');
			setResetCode('');
			setVizible(false);
			navigation.navigate('SignIn');
		} catch (err: any) {
			alert(err.response.data);
			setLoading(false);
		}
	};

	return (
		<>
			<ScrollView>
				<View style={styles.container}>
					<Text style={{ textAlign: 'center', fontSize: 25, color: '#333' }}>
						Fogot Password
					</Text>
					<View style={styles.iconContainer}>
						<Image
							style={styles.icon}
							source={require('../../assets/adaptive-icon1.png')}
						/>
					</View>
					<Controller
						control={control}
						rules={emailValidate}
						render={({ field: { onChange, onBlur, value } }) => (
							<UserInput
								title={'EMAIL'}
								autoCompleteType='email'
								keyboardType='email-address'
								setValue={onChange}
								onBlur={onBlur}
								value={value}
								err={errors.email && true}
							/>
						)}
						name='email'
					/>
					{vizible && (
						<>
							<UserInput
								title={'RESET CODE'}
								secureTextEntry={true}
								setValue={setResetCode}
								value={resetCode}
							/>
							<UserInput
								title={'NEW PASSWORD'}
								secureTextEntry={true}
								setValue={setNewPassword}
								value={newPassword}
							/>
						</>
					)}

					{errors.email && alert(errors.email.message as string)}

					<View style={styles.btn_container}>
						<PrimaryButton
							label={!vizible ? 'Request reset code' : 'Reset code'}
							size={10}
							loading={loading}
							setValue={!vizible ? handleSubmit(onSubmit) : handleRsetPassword}
						/>
					</View>
					<View>
						<Text style={{ textAlign: 'center' }}>
							Return{' '}
							<Text
								onPress={() => navigation.navigate('SignIn')}
								style={{ color: 'red' }}
							>
								Sign In
							</Text>
						</Text>
					</View>
				</View>
			</ScrollView>
		</>
	);
};
