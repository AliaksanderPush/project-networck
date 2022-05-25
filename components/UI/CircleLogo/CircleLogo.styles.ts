import { StyleSheet } from 'react-native';
import { colors } from '../../../config/Colors';

export const styles = StyleSheet.create({
	container_image: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 20,
	},
	wrap_image: {
		backgroundColor: colors.primary,
		height: 190,
		width: 190,
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo_circle: {
		width: 200,
		height: 200,
		marginVertical: 20,
	},
});
