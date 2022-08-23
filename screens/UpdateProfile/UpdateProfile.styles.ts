import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	top_box: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingBottom: 10,
		position: 'relative',
	},
	top_right_box: {
		position: 'absolute',
		top: 0,
		left: 0,
	},

	title_pass_input: {
		fontSize: 20,
		marginTop: 5,
		fontWeight: '700',
		textAlign: 'center',
		marginBottom: 10,
	},

	pass_button: {
		width: '80%',
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: '10%',
		borderRadius: 10,
	},
	text_item: {
		fontSize: 14,
		color: colors.grayDarck,
		textAlign: 'left',
		marginHorizontal: 20,
		marginVertical: 7,
	},

	btn: {
		width: '30%',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginVertical: 15,
	},

	data_item: {
		fontSize: 20,
		paddingLeft: 10,
		color: colors.black,
	},
	input: {
		borderWidth: 1,
		borderColor: colors.grayDarck,
		borderRadius: 4,
		width: 200,
	},

	container_btn: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text_in_input: {
		fontSize: 18,
	},
});
