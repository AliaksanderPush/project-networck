import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { formatDateTime } from '../../helpers/helper';
import { Avatar } from '../Avatar/Avatar';
import { FeedStackParams } from '../nav/RootScreensNav.props';
import { TopBackMenu } from '../TopBackMenu/TopBackMenu';
import { ICardComment } from './CardComment.props';
import { styles } from './CardComment.style';

export const CardComments = ({ comment, userId, role }: ICardComment): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<FeedStackParams>>();
	const { postedBy, createdAt, content, _id } = comment;
	let isMe = userId === postedBy._id;
	const date = formatDateTime(createdAt);

	const editComment = () => {
		if (role === 'admin' || isMe) {
			navigation.navigate('UpdateComment', { id: _id });
		} else {
			return;
		}
	};
	return (
		<Pressable onPress={editComment} style={styles.comment_container}>
			<View style={styles.comment_item}>
				<Avatar url={postedBy.avatar} size={30} />
				<View>
					<Text style={styles.comment_text}>{postedBy.name}</Text>
				</View>
				<View>
					<Text style={{ marginLeft: 150 }}>{date}</Text>
				</View>
			</View>
			<Text>{content}</Text>
		</Pressable>
	);
};
