import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginVertical: 40,
	},
	switch_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
	},
	btn_container: {
		width: '90%',
		marginHorizontal: '5%',
		marginVertical: 30,
	},

	checkBox_container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		marginVertical: 20,
	},
	iconContainer: {
		display: 'flex',
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	icon: {
		width: 200,
		height: 200,
	},
});
