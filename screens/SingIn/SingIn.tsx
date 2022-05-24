import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { IUserLogin } from '../../user/User.props';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { useForm, Controller } from 'react-hook-form';
import { emailValidate, passwordValidate } from '../../user/validate';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { Props } from './SingIn.props';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './SingIn.styles';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

export const SignIn = ({ navigation }: Props): JSX.Element => {
	const { user, error, loading } = useTypedSelector((state) => state.user);

	const { fetchUser } = useActions();

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

	const onSubmit = async (info: IUserLogin) => {
		try {
			fetchUser(info);
			const value = await AsyncStorage.getItem('@auth');
			if (user && value) {
				alert(`Hello dear ${user.searchUser.name}!`);
				navigation.navigate('TabScreenStack');
			} else if (error) {
				alert(error);
			}
		} catch (err) {
			console.log(err);
			alert('Sing in failed. Try again');
		}
	};

	return (
		<>
			<ScrollView>
				<View style={styles.container}>
					<Text style={{ textAlign: 'center', fontSize: 25, color: '#333' }}>
						Sign In
					</Text>
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
