import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { fetchComments } from '../../redux/acshions/acshions.comments';
import { CardComments } from '../../components/CardComment/CardComment';
import { ICommentProps } from './Comments.props';
import { TopBackMenu } from '../../components/TopBackMenu/TopBackMenu';
import { IComment } from '../../user/User.props';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const Comments = ({ route }: ICommentProps) => {
	const [postComments, setPostComments] = useState<IComment[]>([]);
	const { id } = route.params;
	const { comments } = useTypedSelector((state) => state.comments);
	const { user } = useTypedSelector((state) => state.user);
	const { deleteComments } = useActions();
	const dispatch = useDispatch();

	const removeComment = (_id: string): void => {
		deleteComments(_id);
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
		</View>
	);
};
