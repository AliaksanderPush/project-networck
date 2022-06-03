import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { HomeScreenProp, PropsAccount, PropsScreen } from './Account.props';
import { putUser, upLoadImage } from '../../service/service';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CircleLogo } from '../../components/UI/CircleLogo/CircleLogo';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../config/Colors';
import { styles } from './Account.styles';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IUserTokens } from '../../user/User.props';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../components/nav/RootScreensNav.props';

export const Account = (): JSX.Element => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { user, error, loading, tokens } = useTypedSelector((state) => state.user);
	const navigate = useNavigation<HomeScreenProp>();
	const { updateUser } = useActions();
	const [name, setName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [age, setAge] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const [image, setImage] = useState<string>('');

	const handlerUser = () => {
		if (age.length > 3 || gender !== 'male') {
			return alert('Enter the data correctly');
		}

		const newUser = {
			name,
			email,
			age: +age,
			city,
			gender,
			password: user?.password,
		};
		updateUser(user?._id, newUser);
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
		try {
			const data = await upLoadImage(base64Image);
			console.log('data>>', data);
		} catch (error: any) {
			console.log('er>>>', error.response);
		}
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
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<Text style={styles.text_title}>Your Profile</Text>
				<CircleLogo>
					{user?.avatar ? (
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
				{user?.avatar ? (
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
				<Text
					onPress={() => navigate.navigation('UpdatePassword')}
					style={styles.update_password}
				>
					Update password
				</Text>
			</View>
		</KeyboardAwareScrollView>
	);
};
