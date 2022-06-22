import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { InfoInput } from '../../components/UI/InfoInput/InfoInput';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { IUpdateComment } from './UpdateComment.props';
import { styles } from './UpdateComment.styles';

export const UpdateComment = ({ navigation, route }: IUpdateComment) => {
	const { comments } = useTypedSelector((state) => state.comments);
	const { id } = route.params;
	const [text, setText] = useState<string>('');
	const { loading } = useTypedSelector((state) => state.AppReducer);

	const { createComments } = useActions();
	const handleSubmit = () => {
		if (id && text) {
			createComments(text, id);
			setText('');
			navigation.goBack();
		} else {
			alert('Enter your comment');
			return;
		}
	};

	useEffect(() => {
		if (id && comments) {
			const comm = comments.find((item) => item._id === id);
			setText(comm!.content);
		}
	}, []);
	return (
		<>
			<TopBackMenu />

			<View style={styles.container}>
				<Text style={styles.text}>Update your comment:</Text>
				<InfoInput position='top' value={text} setValue={setText} size={100} />
				<PrimaryButton
					label={'Update Comment'}
					size={10}
					loading={loading}
					setValue={handleSubmit}
				/>
			</View>
		</>
	);
};
