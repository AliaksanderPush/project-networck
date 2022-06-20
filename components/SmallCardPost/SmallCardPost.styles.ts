import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	image: {
		width: Dimensions.get('window').width / 2 - 2,
		height: Dimensions.get('window').width / 2 - 2,
		margin: 1,
	},
});
