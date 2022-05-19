import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { IModalWindow } from './ModalWindow.props';

export const ModalWindow = ({ route }: any): JSX.Element => {
	//const { login, email, password, isEnabled, checked } = data;
	console.log('pri>>>', route);
	const data = route.params.data;
	return (
		<View style={styles.container}>
			<Text style={styles.text_title}>Signup successful 👍</Text>
			<Text style={styles.text_item}>Name: {data?.name ? data.name : <></>}</Text>
			<Text style={styles.text_item}>Email: {data?.email}</Text>
			<Text style={styles.text_item}>Password: {data?.password}</Text>

			
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginVertical: 150,
		marginHorizontal: 20,
		borderWidth: 2,
		borderColor: 'thistle',
		borderRadius: 5,
	},
	text_item: {
		fontSize: 24,
		textAlign: 'center',
		marginHorizontal: 10,
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
		color: 'green',
		fontWeight: '700',
	},
});
