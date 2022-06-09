import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	message_container: {
		backgroundColor: colors.gray1,
		padding: 10,
		margin: 10,
		borderRadius: 10,
		maxWidth: '75%',
	},
	leftContainer: {
		backgroundColor: colors.blue,
		marginLeft: 10,
		marginRight: 'auto',
	},
	rightContainer: {
		backgroundColor: colors.gray1,
		marginLeft: 'auto',
		marginRight: 10,
	},
});
