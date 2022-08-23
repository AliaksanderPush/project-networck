import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { useForm, Controller } from 'react-hook-form';
import { emailValidate } from '../../user/validate';
import { PropsFogotPassword } from './FogotPassword.props';
import { styles } from './FogotPassword.styles';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { IPropsEmail } from './FogotPassword.props';
import { fogotPassword } from '../../service/service';

export const FogotPassword = ({ navigation }: PropsFogotPassword): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);
	const [password, setPassword] = useState<string>('');

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = (info: IPropsEmail) => {
		setLoading(true);
		const { email } = info;
		try {
			const response = fogotPassword(email);
			console.log('response>>>', response);
			/*
			if (data.error) {
				alert(data.error);
				
			} else {
				setLoading(false);
				// setVisible(true);
				console.log('RESET PASSWORD RES => ', data);
				alert('Enter the password reset code we sent in your email');
			}
			*/
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

					<UserInput
						title={'PASSWORD'}
						secureTextEntry={true}
						setValue={setPassword}
						value={password}
					/>

					{errors.email && alert(errors.email.message as string)}

					<View style={styles.btn_container}>
						<PrimaryButton
							label='Request reset code'
							size={10}
							loading={loading}
							setValue={handleSubmit(onSubmit)}
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
