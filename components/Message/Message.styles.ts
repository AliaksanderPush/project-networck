import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	message_container: {
		backgroundColor: colors.gray1,
		padding: 10,
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		maxWidth: '75%',
	},
	leftContainer: {
		backgroundColor: colors.blue,
		marginLeft: 40,
		marginRight: 'auto',
		borderBottomRightRadius: 10,
	},
	rightContainer: {
		backgroundColor: colors.gray1,
		marginLeft: 'auto',
		marginRight: 40,
		borderBottomLeftRadius: 10,
	},
	rightBox: {
		marginLeft: 'auto',
		marginBottom: 10,
	},
	leftBox: {
		marginRight: 'auto',
		marginBottom: 10,
	},
});
