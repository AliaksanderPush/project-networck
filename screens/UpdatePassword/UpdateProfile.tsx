import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { UserInput } from '../../components/UI/TextInput/UserTextInput';
import { PropsUdatePass } from './UpdateProfile.props';
import { styles } from './UpdateProfile.styles';
import { upDatepass } from '../../service/service';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../../config/Colors';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';

export const UpdateProfile = ({ navigation }: PropsUdatePass): JSX.Element => {
	const [value, setValue] = useState<string>('');
	const [confirmValue, setConfirmValue] = useState<string>('');
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [age, setAge] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [status, setStatus] = useState<string>('I am working!');
	const { user } = useTypedSelector((state) => state.user);
	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { updateUser } = useActions();

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
	const handlerUser = () => {
		if (age.length > 3 || gender !== 'male') {
			return alert('Enter the data correctly');
		}

		const newUser = {
			name,
			email,
			age: +age,
			city,
			avatar: '',
			gender,
			roles: [],
			password: user?.password,
		};
		updateUser(user?._id, newUser);
	};

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
			setAge(user.age + '');
			setCity(user.city);
			setGender(user.gender);
		}
	}, [user]);

	return (
		<>
			<KeyboardAwareScrollView>
				<View style={styles.container}>
					<View style={styles.top_box}>
						<View style={styles.top_right_box}>
							<TopBackMenu />
						</View>
						<Text style={styles.title_pass_input}>Update your profile</Text>
					</View>

					<Text style={styles.text_item}>
						Name:{' '}
						{!isEdit ? (
							<Text style={styles.data_item}>{name}</Text>
						) : (
							<View style={styles.input}>
								<TextInput
									style={{ fontSize: 20 }}
									value={name}
									onChangeText={setName}
									onBlur={() => setIsEdit(false)}
								/>
							</View>
						)}
					</Text>

					<Text style={styles.text_item}>
						Email:{' '}
						{!isEdit ? (
							<Text style={styles.data_item}>{email}</Text>
						) : (
							<View style={styles.input}>
								<TextInput
									style={styles.text_in_input}
									value={email}
									onChangeText={setEmail}
									onBlur={() => setIsEdit(false)}
								/>
							</View>
						)}{' '}
					</Text>
					<Text style={styles.text_item}>
						Age:{' '}
						{!isEdit ? (
							<Text style={styles.data_item}>{age}</Text>
						) : (
							<View style={styles.input}>
								<TextInput
									style={styles.text_in_input}
									value={age}
									onChangeText={setAge}
									onBlur={() => setIsEdit(false)}
									keyboardType='numeric'
								/>
							</View>
						)}{' '}
					</Text>

					<Text style={styles.text_item}>
						City:{' '}
						{!isEdit ? (
							<Text style={styles.data_item}>{city}</Text>
						) : (
							<View style={styles.input}>
								<TextInput
									style={styles.text_in_input}
									value={city}
									onChangeText={setCity}
									onBlur={() => setIsEdit(false)}
								/>
							</View>
						)}{' '}
					</Text>

					<Text style={styles.text_item}>
						gender:{' '}
						{!isEdit ? (
							<Text style={styles.data_item}>{gender}</Text>
						) : (
							<View style={styles.input}>
								<TextInput
									style={styles.text_in_input}
									value={gender}
									onChangeText={setGender}
									onBlur={() => setIsEdit(false)}
								/>
							</View>
						)}{' '}
					</Text>
					<Text style={styles.text_item}>
						status:{' '}
						{!isEdit ? (
							<Text style={styles.data_item}>{status}</Text>
						) : (
							<View style={styles.input}>
								<TextInput
									style={styles.text_in_input}
									value={status}
									onChangeText={setStatus}
									onBlur={() => setIsEdit(false)}
								/>
							</View>
						)}{' '}
					</Text>

					<View style={styles.container_btn}>
						<View style={styles.btn}>
							<PrimaryButton
								label={'Edit Account'}
								setValue={() => setIsEdit(!isEdit)}
							/>
						</View>
						<View style={styles.btn}>
							<PrimaryButton
								buttonBg={colors.green}
								label='SAVE'
								setValue={handlerUser}
								loading={loading}
							/>
						</View>
					</View>

					<Text style={styles.title_pass_input}>Change password </Text>
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
			</KeyboardAwareScrollView>
		</>
	);
};
