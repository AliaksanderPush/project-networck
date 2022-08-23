import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},

	post_image: {
		width: 340,
		height: 340,
		backgroundColor: '#fff',
		marginBottom: 7,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: 'black',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		borderRadius: 14,
	},
	text_container: {
		width: '80%',
		marginTop: 5,
	},

	post_button: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
});
