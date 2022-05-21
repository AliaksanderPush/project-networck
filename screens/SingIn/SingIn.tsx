import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, Alert, ScrollView } from 'react-native';
import { IUserLogin } from '../../user/User.props';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { useForm, Controller } from 'react-hook-form';
import { emailValidate, passwordValidate } from '../../user/validate';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { Props } from './SingIn.props';
import { styles } from './SingIn.styles';

export const SignIn = ({ navigation }: Props): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(false);

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

	const onSubmit = (info: IUserLogin) => {
		setLoading(true);
		const response = fetchUser(info);
		setLoading(false);
		navigation.navigate('Account');
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
						render={({ field: { onChange, value } }) => (
							<UserInput
								title={'EMAIL'}
								autoCompleteType='email'
								keyboardType='email-address'
								setValue={onChange}
								value={value}
								err={errors.email && true}
							/>
						)}
						name='email'
					/>

					<Controller
						control={control}
						rules={passwordValidate}
						render={({ field: { onChange, value } }) => (
							<UserInput
								title={'PASSWORD'}
								secureTextEntry={true}
								setValue={onChange}
								value={value}
								err={errors.password && true}
							/>
						)}
						name='password'
					/>
					{errors.email && Alert.alert(errors.email.message as string)}
					{errors.password && Alert.alert(errors.password.message as string)}

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
