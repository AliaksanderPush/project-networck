import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CircleLogo } from '../../components/UI/CircleLogo/CircleLogo';
import { Entypo } from '@expo/vector-icons';
import { FormDataProps } from './Account.props';
import { colors } from '../../config/Colors';
import { styles } from './Account.styles';
import * as ImagePicker from 'expo-image-picker';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AcccountStackParams } from '../../components/nav/RootScreensNav.props';
import { API_URL } from '../../service/auth-service';

export const Account = (): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<AcccountStackParams>>();
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const { user, error, loading } = useTypedSelector((state) => state.user);
	const { updateUser, upDateAvatar } = useActions();
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
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			width: 100,
		});
		if (!!pickerResult.cancelled) {
			return;
		}

		setImage(pickerResult.uri);

		const formData: FormDataProps = new FormData();
		formData.append('filedata', {
			name: 'filedata',
			uri: pickerResult.uri,
			type: 'image/jpg',
		});
		upDateAvatar(formData);
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
							source={{ uri: `${API_URL}/${user?.avatar}` }}
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
						<PrimaryButton label={'Edit Account'} setValue={() => setIsEdit(!isEdit)} />
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
				<Text
					onPress={() => navigation.navigate('UpdatePassword')}
					style={styles.update_password}
				>
					Update password
				</Text>
			</View>
		</KeyboardAwareScrollView>
	);
};
