import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PropsAccount } from './Account.props';
import { colors } from '../../config/Colors';
import { putUser } from '../../service/service';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CircleLogo } from '../../components/UI/CircleLogo/CircleLogo';
import { styles } from './Account.styles';

export const Account = ({ navigation }: PropsAccount): JSX.Element => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { user, error, loading } = useTypedSelector((state) => state.user);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [age, setAge] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [city, setCity] = useState<string>('');

	const handlerUser = async () => {
		//if (age.length > 3 || gender !== 'male' || 'female') {
		//		return alert('Enter the data correctly');
		//	}

		const newUser = {
			name,
			email,
			age: +age,
			city,
			gender,
			password: user?.searchUser.password,
		};
		const res = await putUser(user?.searchUser._id, newUser);
		console.log('put>>>', res);
	};

	useEffect(() => {
		if (user) {
			setName(user.searchUser.name);
			setEmail(user.searchUser.email);
			setAge(user.searchUser.age + '');
			setCity(user.searchUser.city);
			setGender(user.searchUser.gender);
		}
	}, [user]);

	return (
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<View style={styles.wrap}>
					<Text style={styles.text_title}>Your Profile</Text>
					<CircleLogo />
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
									style={{ fontSize: 24 }}
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
									style={{ fontSize: 24 }}
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
									style={{ fontSize: 24 }}
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
									style={{ fontSize: 24 }}
									value={gender}
									onChangeText={setGender}
									onBlur={() => setIsEdit(false)}
								/>
							</View>
						)}{' '}
					</Text>
					<View style={styles.container_btn}>
						<View style={styles.btn}>
							<PrimaryButton
								buttonBg={colors.primary}
								text={colors.secondary}
								label={'Edit Account'}
								setValue={() => setIsEdit(!isEdit)}
							/>
						</View>
						<View style={styles.btn}>
							<PrimaryButton
								buttonBg={colors.green}
								label='SAVE'
								setValue={handlerUser}
							/>
						</View>
					</View>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
};
