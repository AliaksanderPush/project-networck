import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
		width: '40%',
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: 'blue',
		borderRadius: 5,
		marginVertical: 20,
		marginHorizontal: '30%',
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
