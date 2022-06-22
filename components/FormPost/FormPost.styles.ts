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
		marginBottom: 7,
		borderWidth: 2,
		borderColor: colors.grayDarck,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text_container: {
		width: '80%',
	},

	post_button: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
});
