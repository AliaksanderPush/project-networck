import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	person_container: {
		marginBottom: 10,
		borderBottomWidth: 1,
		borderColor: colors.gray1,
	},
	person_header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginRight: 10,
	},
	person_name: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	person_btn: {
		width: 180,
	},
});
