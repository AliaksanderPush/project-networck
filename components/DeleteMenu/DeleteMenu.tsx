import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { colors } from '../../config/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { IDeleteMenu } from './DeleteMenu.props';
import { useNavigation } from '@react-navigation/native';

export const DeleteMenu = ({ id }: IDeleteMenu) => {
	const { deletePosts } = useActions();
	const navigation = useNavigation();
	const removePost = () => {
		navigation.goBack();
		if (id) {
			deletePosts(id);
		}
	};

	return (
		<View style={styles.container}>
			<TouchableHighlight
				style={styles.backButton}
				underlayColor={colors.blue}
				onPress={removePost}
			>
				<AntDesign name='delete' size={32} color='black' />
			</TouchableHighlight>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	backButton: {
		borderRadius: 8,
		width: 40,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
