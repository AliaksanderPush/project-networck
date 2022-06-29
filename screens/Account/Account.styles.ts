import { StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#EEEEEE',
		paddingHorizontal: 10,
	},
	text_item: {
		fontSize: 16,
		textAlign: 'left',
		marginHorizontal: 20,
		marginVertical: 10,
	},

	info: {
		width: '50%',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},

	info_count: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: '700',
	},

	info_text: {
		textAlign: 'center',
		marginVertical: 10,
		fontSize: 20,
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
		color: colors.blue,
		fontWeight: '700',
	},
	status: {
		width: '100%',
		height: 40,
		backgroundColor: '#b7def7',
		flexDirection: 'row',
		marginTop: 20,
	},
	status_text: {
		textAlign: 'center',
		lineHeight: 40,
		fontSize: 20,
	},
	status_text_item: {
		marginLeft: 30,
		color: colors.blue,
	},
	post_container: {
		flexDirection: 'row',
		justifyContent: 'center',
		flexWrap: 'wrap',
	},
});
