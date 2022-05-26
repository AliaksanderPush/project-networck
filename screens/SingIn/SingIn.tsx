import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { IUserLogin } from '../../user/User.props';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { useForm, Controller } from 'react-hook-form';
import { emailValidate, passwordValidate } from '../../user/validate';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { Props } from './SingIn.props';
import { styles } from './SingIn.styles';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

export const SignIn = ({ navigation }: Props): JSX.Element => {
	const { user, error, loading } = useTypedSelector((state) => state.user);
	const { fetchUser, logOut } = useActions();

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = (info: IUserLogin) => {
		logOut();
		fetchUser(info);
	};

	if (error) {
		alert(error);
	}

	return (
		<>
			<ScrollView>
				<View style={styles.container}>
					<Text style={{ textAlign: 'center', fontSize: 25, color: '#333' }}>
						Sign In
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

					<Controller
						control={control}
						rules={passwordValidate}
						render={({ field: { onChange, onBlur, value } }) => (
							<UserInput
								title={'PASSWORD'}
								secureTextEntry={true}
								setValue={onChange}
								onBlur={onBlur}
								value={value}
								err={errors.password && true}
							/>
						)}
						name='password'
					/>
					{errors.email && alert(errors.email.message as string)}
					{errors.password && alert(errors.password.message as string)}

					<View style={styles.btn_container}>
						<TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn_btnnn}>
							<Text style={{ color: 'white', fontSize: 20 }}>
								{!loading ? 'Sing In' : 'Please waite...'}
							</Text>
						</TouchableOpacity>
					</View>
					<View>
						<Text style={{ textAlign: 'center' }}>
							Already Joined?{' '}
							<Text
								onPress={() => navigation.navigate('SignUp')}
								style={{ color: 'red' }}
							>
								Sign Up
							</Text>
						</Text>
					</View>
				</View>
			</ScrollView>
		</>
	);
};
