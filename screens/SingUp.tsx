import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Alert,
	ScrollView,
	TextInput,
} from 'react-native';
import { IUserRegistr } from '../user/User.props';
import { UserCheckBox } from '../components/UI/CheckBox/UserCheckBox';
import { UserSwitch } from '../components/UI/Switch/UserSwitch';
import { UserInput } from '../components/UI/TextInput/UserTextInput';
import { ModalWindow } from '../components/modalWindow/ModalWindow';
import { useForm, Controller } from 'react-hook-form';
import { emailValidate, passwordValidate, loginValidate } from '../user/validate';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { registration } from '../service/service';

type RootStackParamList = {
	SignIn: undefined;

	PdpComments: { slug: string };
	Sellers: { data: Array<string> };
	Favorites: undefined;
};

interface IPdpPageProps {
	navigation: NativeStackNavigationProp<RootStackParamList, 'SignIn'>;
}

export const SignUp: React.FC<IPdpPageProps> = ({ navigation }) => {
	const [isEnabled, setIsEnabled] = useState<boolean>(false);

	const [showModalWin, setShowModalWin] = useState<boolean>(false);

	const [checkedMale, setCheckedMale] = useState<boolean>(false);

	const [checkedFemale, setCheckedFemale] = useState<boolean>(false);

	const [data, setData] = useState<IUserRegistr | null>(null);

	const [loading, setLoading] = useState<boolean>(false);

	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			login: '',
			password: '',
			city: '',
		},
	});

	const toggeShowModal = () => {
		setShowModalWin(!showModalWin);
	};

	const onSubmit = async (info: IUserRegistr) => {
		setLoading(true);
		//(info['isEnabled'] = isEnabled), (info['checked'] = checked);
		const { login, email, password } = info;

		try {
			const response = await registration(login, email, password);
			setLoading(false);
			setData(info);
			Alert.alert(response.data);
		} catch (error: any) {
			setLoading(false);
			Alert.alert(error.response.data);
		}

		//toggeShowModal();
	};

	return (
		<>
			{!showModalWin ? (
				<ScrollView>
					<View style={styles.container}>
						<Text style={{ textAlign: 'center', fontSize: 25, color: '#333' }}>
							Sign Up
						</Text>

						<Controller
							control={control}
							rules={loginValidate}
							render={({ field: { onChange, value } }) => (
								<UserInput
									title={'LOGIN'}
									setValue={onChange}
									value={value}
									err={errors.login && true}
								/>
							)}
							name='login'
						/>

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

						<Controller
							control={control}
							rules={loginValidate}
							render={({ field: { onChange, value } }) => (
								<UserInput
									title={'CITY'}
									setValue={onChange}
									value={value}
									err={errors.city && true}
								/>
							)}
							name='city'
						/>

						{errors.email && Alert.alert(errors.email.message as string)}
						{errors.login && Alert.alert(errors.login.message as string)}
						{errors.password && Alert.alert(errors.password.message as string)}

						<View style={styles.checkBox_container}>
							<Text>Male</Text>
							<UserCheckBox
								checked={checkedMale}
								handleCheckBox={setCheckedMale}
								off={checkedFemale ? true : false}
								text={'Male'}
							/>
							<Text>Female</Text>
							<UserCheckBox
								checked={checkedFemale}
								handleCheckBox={setCheckedFemale}
								off={checkedMale ? true : false}
								text={'Female'}
							/>
						</View>
						<View style={styles.btn_container}>
							<TouchableOpacity
								onPress={handleSubmit(onSubmit)}
								style={styles.btn_btnnn}
							>
								<Text style={{ color: 'white', fontSize: 20 }}>
									{!loading ? 'Sing Up' : 'loading...'}
								</Text>
							</TouchableOpacity>
						</View>
						<View>
							<Text style={{ textAlign: 'center' }}>
								Already Joined?{' '}
								<Text
									onPress={() => navigation.navigate('SignIn')}
									style={{ color: 'red' }}
								>
									Sing In
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
