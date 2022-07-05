import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../redux/acshions/acshions.comments';
import { CardComments } from '../../components/CardComment/CardComment';
import { ICommentProps } from './Comments.props';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { IComment } from '../../types/types';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const Comments = ({ route }: ICommentProps): JSX.Element => {
	const [postComments, setPostComments] = useState<IComment[]>([]);
	const { id } = route.params;
	const { comments } = useTypedSelector((state) => state.comments);
	const { user } = useTypedSelector((state) => state.user);
	const { deleteComments } = useActions();
	const dispatch = useDispatch();

	const removeComment = (_id: string): void => {
		if (id) {
			deleteComments(_id, id);
		}
	};

	useEffect(() => {
		dispatch(fetchComments());
	}, [dispatch]);

	useEffect(() => {
		if (comments && id) {
			const comm = comments.filter((item) => item.postId === id);
			setPostComments(comm);
		}
	}, [comments]);

	return (
		<View style={{ flex: 1 }}>
			<TopBackMenu />
			{!postComments.length ? (
				<View>
					<Text style={{ textAlign: 'center', fontSize: 20 }}>No Comments</Text>
				</View>
			) : (
				<FlatList
					data={postComments}
					renderItem={({ item }) => {
						return (
							<CardComments
								comment={item}
								removeComment={removeComment}
								postId={id!}
								userId={user!._id!}
								role={user!.roles![0]}
							/>
						);
					}}
				/>
			)}
		</View>
	);
};
