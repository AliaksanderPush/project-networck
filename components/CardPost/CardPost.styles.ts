import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../config/Colors';

export const styles = StyleSheet.create({
	card_container: {
		marginBottom: 10,
	},
	image: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width,
	},
	card_header: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	card_header_text: {
		fontSize: 24,
		marginLeft: 10,
	},
	card_footer: {
		borderBottomWidth: 1,
		borderColor: colors.gray1,
		paddingHorizontal: 10,
	},
	card_footer_comment: {
		textAlign: 'center',
		color: colors.grayDarck,
		marginBottom: 5,
	},
	card_icons: {
		flexDirection: 'row',
		margin: 10,
	},
	footer_content: {
		textAlign: 'justify',
	},
});
