import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { MessageInput } from '../../components/MessageInput/MessageInput';
import { IPost } from '../../types/types';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { searchByTitle } from '../../helpers/helper';
import { CardPost } from '../../components/CardPost/CardPost';

export const Feed = (): JSX.Element => {
	const { posts } = useTypedSelector((state) => state.posts);
	const { user } = useTypedSelector((state) => state.user);
	const [allPosts, setAllPosts] = useState<IPost[]>([]);
	const [showAllPosts, setShowAllPosts] = useState<boolean>(false);
	const [text, setText] = useState<string>('');

	const { fetchPosts } = useActions();

	const handleSearchPost = () => {
		const searchPost = posts.filter((row) => searchByTitle(row.title, text as string));
		if (!searchPost.length) {
			alert('Not found');
			return;
		} else {
			setAllPosts(searchPost);
			setShowAllPosts(true);
			setText('');
		}
	};

	const handleShowPost = () => {
		fetchPosts();
		setShowAllPosts(false);
		setText('');
	};

	useEffect(() => {
		if (posts) {
			setAllPosts(posts);
		}
	}, [posts]);

	return (
		<>
			<View>
				<MessageInput
					value={text}
					onChange={setText}
					handlePress={handleSearchPost}
					chat={false}
				/>
			</View>
			{showAllPosts && (
				<Pressable onPress={handleShowPost}>
					<Text style={{ textAlign: 'center', color: 'blue' }}>Show all posts</Text>
				</Pressable>
			)}
			{!posts.length ? (
				<View style={{ flex: 1 }}>
					<Text style={{ textAlign: 'center', marginTop: '40%', fontSize: 22 }}>
						No Found
					</Text>
				</View>
			) : (
				<View style={{ flex: 1 }}>
					<FlatList
						data={allPosts}
						renderItem={({ item }) => {
							return <CardPost post={item} id={user?._id} hide={true} />;
						}}
					/>
				</View>
			)}
		</>
	);
};
