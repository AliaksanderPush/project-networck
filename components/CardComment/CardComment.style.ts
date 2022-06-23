import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	comment_container: {
		padding: 10,
		backgroundColor: '#52BBE6',
		marginHorizontal: 5,
		borderRadius: 30,
	},
	comment_box: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	comment_item: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	comment_text: {
		fontWeight: '700',
		fontSize: 18,
		marginTop: 18,
	},
	comment_content: {
		fontSize: 18,
		marginLeft: 10,
	},
	comment_handle: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	handle_button: {
		marginHorizontal: 10,
		fontSize: 18,
		color: 'gray',
	},
});
