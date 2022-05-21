import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { PropsAccount } from './Account.props';
import { colors } from '../../config/Colors';
import { IUser, IUserDTO } from '../../user/User.props';
import { IUserState } from '../../redux/types/user.types';

export const Account = ({ navigation }: PropsAccount): JSX.Element => {
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [user, setUser] = useState<IUserState>(Object);
	useTypedSelector((state) => state.user);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [age, setAge] = useState('');
	const [gender, setGender] = useState('');
	const [city, setCity] = useState('');

	console.log('user>>>>', name);
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
						<Text style={styles.data_item}>{user.user?.searchUser.name}</Text>
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
						<Text style={styles.data_item}>{user.user?.searchUser?.email}</Text>
					) : (
						<View style={styles.input}>
							<TextInput
								style={{ fontSize: 24 }}
								value={user.user?.searchUser?.email}
								onChangeText={setEmail}
								onBlur={() => setIsEdit(false)}
							/>
						</View>
					)}{' '}
				</Text>
				<Text style={styles.text_item}>
					Age:{' '}
					{!isEdit ? (
						<Text style={styles.data_item}>{user.user?.searchUser?.age}</Text>
					) : (
						<View style={styles.input}>
							<TextInput
								style={{ fontSize: 24 }}
								value={user.user?.searchUser?.age + ''}
								onChangeText={setAge}
								onBlur={() => setIsEdit(false)}
							/>
						</View>
					)}{' '}
				</Text>

				<Text style={styles.text_item}>
					City:{' '}
					{!isEdit ? (
						<Text style={styles.data_item}>{user.user?.searchUser?.city}</Text>
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
						<Text style={styles.data_item}>{user.user?.searchUser?.gender}</Text>
					) : (
						<View style={styles.input}>
							<TextInput
								style={{ fontSize: 24 }}
								value={user.user?.searchUser?.gender}
								onChangeText={setGender}
								onBlur={() => setIsEdit(false)}
							/>
						</View>
					)}{' '}
				</Text>
				<View style={styles.btn}>
					<Button color='blue' onPress={() => navigation.navigate('SignUp')} title='OK' />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'thistle',
	},
	wrap: {
		width: '90%',
		height: '90%',
		backgroundColor: '#fff',
		borderRadius: 10,
		justifyContent: 'center',
		marginLeft: '5%',
		padding: 20,
	},
	text_item: {
		fontSize: 24,
		textAlign: 'left',
		marginHorizontal: 10,
		marginVertical: 20,
	},
	btn: {
		width: '20%',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: 'blue',
		borderRadius: 5,
		marginVertical: 20,
		marginHorizontal: '40%',
	},
	text_title: {
		fontSize: 28,
		textAlign: 'center',
		marginHorizontal: 10,
		marginVertical: 30,
		color: 'green',
		fontWeight: '700',
	},
	data_item: {},
	input: {
		fontSize: 24,
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 4,
		padding: 0,
		margin: 0,
		width: 200,
	},
});
