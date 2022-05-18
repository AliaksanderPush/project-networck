import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { IUserLogin } from '../user/User.props';
import { UserInput } from '../components/UI/TextInput/UserTextInput';
import { UserCheckBox } from '../components/UI/CheckBox/UserCheckBox';
import { UserSwitch } from '../components/UI/Switch/UserSwitch';
import { ModalWindow } from '../components/modalWindow/ModalWindow';
import { useForm, Controller } from 'react-hook-form';

import { emailValidate, passwordValidate, loginValidate } from '../user/validate';

export const SignIn = ({ navigation }: any) => {
	const [isEnabled, setIsEnabled] = useState<boolean>(false);

	const [showModalWin, setShowModalWin] = useState<boolean>(false);

	const [checked, setChecked] = useState<boolean>(false);

	const [data, setData] = useState<IUserLogin | null>(null);

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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

	const toggeShowModal = () => {
		setShowModalWin(!showModalWin);
	};

	const onSubmit = (info: IUserLogin) => {
		setData(info);
		toggeShowModal();
	};

	return (
		<>
			{!showModalWin ? (
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
									//onBlur={onBlur}
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
									//	onBlur={onBlur}
									setValue={onChange}
									value={value}
									err={errors.password && true}
								/>
							)}
							name='password'
						/>
						{errors.email && Alert.alert(errors.email.message as string)}
						{errors.password && Alert.alert(errors.password.message as string)}

						<View style={styles.switch_container}>
							<Text>Confirm</Text>
							<UserSwitch toggleSwitch={toggleSwitch} value={isEnabled} />
						</View>
						<View style={styles.checkBox_container}>
							<Text>Receive notifications</Text>
							<UserCheckBox
								checked={checked}
								handleCheckBox={setChecked}
								off={false}
								text={'Male'}
							/>
						</View>
						<View style={styles.btn_container}>
							<TouchableOpacity
								onPress={handleSubmit(onSubmit)}
								style={styles.btn_btnnn}
							>
								<Text style={{ color: 'white', fontSize: 20 }}>Sign Up</Text>
							</TouchableOpacity>
						</View>
						<View>
							<Text style={{ textAlign: 'center' }}>
								Already Joined?{' '}
								<Text
									onPress={() => navigation.navigate('Splash')}
									style={{ color: 'red' }}
								>
									Sing Up
								</Text>
							</Text>
						</View>
					</View>
				</ScrollView>
			) : (
				<ModalWindow toggeShowModal={toggeShowModal} data={data} />
			)}
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
