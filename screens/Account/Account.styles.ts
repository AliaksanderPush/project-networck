import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	wrap: {
		flex: 1,
		justifyContent: 'center',
		padding: 10,
		backgroundColor: '#EEEEEE',
	},
	text_item: {
		fontSize: 16,
		textAlign: 'left',
		marginHorizontal: 20,
		marginVertical: 10,
	},
	btn: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginVertical: 20,
	},
	text_title: {
		fontSize: 28,
		textAlign: 'center',
		marginHorizontal: 10,
		marginVertical: 10,
		color: 'green',
		fontWeight: '700',
	},
	data_item: {
		fontSize: 24,
	},
	input: {
		borderWidth: 1,
		borderColor: 'blue',
		borderRadius: 4,
		width: 200,
		flex: 1,
	},
	iconContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	icon: {
		width: 200,
		height: 200,
	},
	container_btn: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});
