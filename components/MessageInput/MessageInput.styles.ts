import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	inp_message_container: {
		flexDirection: 'row',
		padding: 10,
	},
	input_message_wrap: {
		backgroundColor: '#f2f2f2',
		flex: 1,
		marginRight: 10,
		borderRadius: 25,
		borderWidth: 1,
		borderColor: '#dedede',
		alignItems: 'center',
		flexDirection: 'row',
		padding: 5,
	},
	input: {
		flex: 1,
		marginHorizontal: 5,
	},
	icon: {
		marginHorizontal: 5,
	},
	buttons_container: {
		width: 40,
		height: 40,
		backgroundColor: '#3777f0',
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 35,
	},
});
