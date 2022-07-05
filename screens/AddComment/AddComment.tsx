import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { InfoInput } from '../../components/UI/InfoInput/InfoInput';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { IAddComment } from './AddComment.props';
import { styles } from './AddComment.style';

export const AddComment = ({ navigation, route }: IAddComment): JSX.Element => {
	const { id } = route.params;
	const [text, setText] = useState<string>('');
	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { createComments } = useActions();
	const handleSubmit = () => {
		if (id && text) {
			createComments(text, id);
			setText('');
			navigation.navigate('Comments', { id });
		} else {
			alert('Enter your comment');
			return;
		}
	};
	return (
		<>
			<TopBackMenu />
			<View style={styles.container}>
				<Text style={styles.text}>Add your comment:</Text>
				<InfoInput position='top' value={text} setValue={setText} size={100} />
				<PrimaryButton
					label={'Add Comment'}
					size={10}
					loading={loading}
					setValue={handleSubmit}
				/>
			</View>
		</>
	);
};
