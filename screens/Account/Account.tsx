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
import * as ImagePicker from 'expo-image-picker';

export const Account = ({ navigation }: PropsAccount): JSX.Element => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { user, error, loading } = useTypedSelector((state) => state.user);
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [age, setAge] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [image, setImage] = useState<string>('');

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

	const handleCreateFoto = async () => {
		const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (permissionResult.granted === false) {
			return alert('camera access is required');
		}
		const pickerResult = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3],
			base64: true,
		});
		if (pickerResult.cancelled === true) {
			return;
		}
		const base64Image = `data:image;base64,${pickerResult.base64}`;
		setImage(base64Image);
		console.log('picker>>', pickerResult);
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
							style={{
								width: 190,
								height: 190,
								marginVertical: 20,
								borderRadius: 100,
							}}
							source={{
								uri: 'https://cdn.pixabay.com/photo/2022/05/22/12/08/baby-7213274_960_720.jpg',
							}}
						/>
					) : image ? (
						<Image
							style={{
								width: 190,
								height: 190,
								marginVertical: 20,
								borderRadius: 100,
							}}
							source={{
								uri: image,
							}}
						/>
					) : (
						<TouchableOpacity onPress={handleCreateFoto}>
							<Entypo name='camera' size={60} color={colors.gray1} />
						</TouchableOpacity>
					)}
				</CircleLogo>
				{!user?.searchUser?.avatar ? (
					<TouchableOpacity style={{ alignItems: 'center' }} onPress={handleCreateFoto}>
						<Entypo name='camera' size={32} color='black' />
					</TouchableOpacity>
				) : null}

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
