import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { IModalWindow } from '../components/modalWindow/ModalWindow.props';
import { PrimaryButton } from '../components/UI/Button/PrimaryButton';
import { colors } from '../config/Colors';

export const Account = ({ data, toggeShowModal }: IModalWindow): JSX.Element => {
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const [name, setName] = useState<string | undefined>(data?.name);
	const [email, setEmail] = useState<string | undefined>(data?.email);
	const [password, setPassword] = useState<string | undefined>(data?.password);
	const [age, setAge] = useState<string | undefined>(data?.age + '');
	const [city, setCity] = useState<string | undefined>(data?.city);
	const [gender, setGender] = useState<string | undefined>(data?.gender);

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
						<Text style={styles.data_item}>{name}</Text>
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
					Password:{' '}
					{!isEdit ? (
						<Text style={styles.data_item}>{password}</Text>
					) : (
						<View style={styles.input}>
							<TextInput
								style={{ fontSize: 24 }}
								value={password}
								onChangeText={setPassword}
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
					<Button color='blue' onPress={toggeShowModal} title='OK' />
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
