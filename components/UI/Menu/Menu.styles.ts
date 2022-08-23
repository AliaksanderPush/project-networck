import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../../config/Colors';

export const styles = StyleSheet.create({
	menu: {
		width: 150,
		height: 60,
		backgroundColor: colors.primary,
		borderRadius: 20,
		position: 'absolute',
		top: Dimensions.get('window').width - 100,
		left: Dimensions.get('window').width - 300,
		zIndex: 100,
	},
	text_menu: {
		color: '#fff',
		textAlign: 'center',
		marginVertical: 15,
		fontSize: 20,
	},
});
