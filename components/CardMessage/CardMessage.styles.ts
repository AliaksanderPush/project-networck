import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	card_container: {
		flexDirection: 'row',
		pading: 10,
		marginVertical: 10,
		marginHorizontal: 10,
		borderBottomWidth: 2,
		borderColor: colors.gray1,
	},
	user_avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 10,
	},
	card_row: {
		flex: 1,
	},
	card_item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

	name: {
		fontWeight: 'bold',
		fontSize: 18,
		marginBottom: 3,
	},
	message: {
		color: colors.grayDarck,
		fontSize: 18,
	},
	bage_row: {
		backgroundColor: colors.blue,
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 35,
		top: 3,
		borderWidth: 1,
		borderColor: colors.secondary,
	},
	bage_text: {
		color: colors.secondary,
		fontSize: 12,
	},
});
