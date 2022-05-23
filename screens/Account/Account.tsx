import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PropsAccount } from './Account.props';
import { colors } from '../../config/Colors';
import { putUser } from '../../service/service';
import { TopDrawerMenu } from '../../components/TopDrawerMenu/TopDrawerMenu';
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
		<View style={styles.container}>
			<View style={styles.wrap}>
				<Text style={styles.text_title}>Personal account 👍</Text>
				<PrimaryButton
					buttonBg={colors.primary}
					text={colors.secondary}
					label={'Edit Account'}
					setValue={() => setIsEdit(!isEdit)}
				/>
				<Text style={styles.text_item}>
					Name:{' '}
					{!isEdit ? (
						<Text style={styles.data_item}>{name}</Text>
					) : (
						<View style={styles.input}>
							<TextInput
								style={{ fontSize: 24 }}
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
				<View style={styles.btn}>
					<PrimaryButton label='SAVE' setValue={handlerUser} />
				</View>
			</View>
			<View>
				<Text
					onPress={() => navigation.popToTop()}
					style={{ textAlign: 'center', color: 'blue' }}
				>
					Go to login
				</Text>
			</View>
		</View>
	);
};
