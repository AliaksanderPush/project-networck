import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},

	post_image: {
		width: 250,
		height: 250,
		marginVertical: 20,
		borderWidth: 2,
		borderColor: colors.grayDarck,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text_container: {
		width: '100%',
	},
	input_title: {
		height: 40,
		width: '80%',
		marginHorizontal: '10%',
		marginBottom: 7,
		borderWidth: 1,
		padding: 10,
	},

	input: {
		height: 180,
		width: '80%',
		marginHorizontal: '10%',
		marginBottom: 20,
		borderWidth: 1,
		padding: 10,
		textAlignVertical: 'top',
	},
	post_button: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: '10%',
		borderRadius: 10,
	},
});
