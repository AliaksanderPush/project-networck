import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { IUserLogin, IUserRegistr } from '../user/User.props';
import { UserInput } from '../components/UI/TextInput/UserTextInput';
import { useForm, Controller } from 'react-hook-form';
import { autorization } from '../service/service';
import { emailValidate, passwordValidate } from '../user/validate';

export const SignIn = ({ navigation }: any) => {
	
	const [data, setData] = useState<IUserRegistr | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

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
		setLoading(true);
		const response = await autorization(info);
		setData(response.searchUser);
		setLoading(false);
       	navigation.navigate('Account', {data})
	
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
							<TouchableOpacity
								onPress={handleSubmit(onSubmit)}
								style={styles.btn_btnnn}
							>
								<Text style={{ color: 'white', fontSize: 20 }}>{!loading ? 'Sing In' : 'Please waite...'}</Text>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginVertical: 40,
	},
	switch_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	btn_container: {
		width: '90%',
		marginHorizontal: '5%',
		marginVertical: 30,
	},
	btn_btnnn: {
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#00008b',
		marginHorizontal: 10,
		borderRadius: 10,
	},
	checkBox_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		marginVertical: 20,
	},
});
