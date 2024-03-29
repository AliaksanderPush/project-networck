import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { IUserLogin } from '../../types/types';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { useForm, Controller } from 'react-hook-form';
import { emailValidate, passwordValidate } from '../../validate/validate';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { Props } from './SingIn.props';
import { styles } from './SingIn.styles';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { io } from 'socket.io-client';
import { API_URL } from '../../service/auth-service';

export const SignIn = ({ navigation }: Props): JSX.Element => {
	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { fetchUser, loadSocket } = useActions();

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
		fetchUser(info);
	};

	useEffect(() => {
		const sockets = io(API_URL, {
			transports: ['websocket'],
		});
		sockets.connect();
		loadSocket(sockets);
		console.log('socket is Load!!!!!!!!!!');
	}, []);

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
						<PrimaryButton
							label='Sing In'
							size={10}
							loading={loading}
							setValue={handleSubmit(onSubmit)}
						/>
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
						<Text
							onPress={() => navigation.navigate('FogotPassword')}
							style={{ textAlign: 'center', marginTop: 15, color: 'orange' }}
						>
							Fogot Password
						</Text>
					</View>
				</View>
			</ScrollView>
		</>
	);
};
