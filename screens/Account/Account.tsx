import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PropsAccount } from './Account.props';
import { putUser } from '../../service/service';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CircleLogo } from '../../components/UI/CircleLogo/CircleLogo';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../config/Colors';
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
		console.log('gender>>', gender);
		if (age.length > 3 || gender !== 'male') {
			return alert('Enter the data correctly');
		}

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

	const handleCreateFoto = () => {
		console.log('isWork!!');
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
				<Text style={styles.text_title}>Your Profile</Text>
				<CircleLogo>
					{user?.searchUser?.avatar ? (
						<Image
							style={{ width: 200, height: 200, marginVertical: 20 }}
							source={{ uri: user.searchUser.avatar }}
						/>
					) : (
						<TouchableOpacity onPress={handleCreateFoto}>
							<Entypo name='camera' size={60} color={colors.gray1} />
						</TouchableOpacity>
					)}
				</CircleLogo>
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
								style={{ fontSize: 20 }}
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
								style={{ fontSize: 20 }}
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
								style={{ fontSize: 20 }}
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
		</KeyboardAwareScrollView>
	);
};
