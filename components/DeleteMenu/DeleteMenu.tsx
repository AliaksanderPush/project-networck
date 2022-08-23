import React from 'react';
import { View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { colors } from '../../config/Colors';
import { AntDesign } from '@expo/vector-icons';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useNavigation } from '@react-navigation/native';
import { styles } from './DeleteMenu.props';

export const DeleteMenu = ({ id }: { id: string | undefined }): JSX.Element => {
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
