import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { formatDateDay, formatDateTime, formatDateHour } from '../../helpers/helper';
import { Avatar } from '../Avatar/Avatar';
import { FeedStackParams } from '../nav/RootScreensNav.props';
import { TopBackMenu } from '../TopBackMenu/TopBackMenu';
import { ICardComment } from './CardComment.props';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { deleteComments } from '../../redux/acshions/acshions.comments';
import { styles } from './CardComment.style';
import { useEffect } from 'react';

export const CardComments = ({
	comment,
	userId,
	role,
	removeComment,
}: ICardComment): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<FeedStackParams>>();
	const { postedBy, createdAt, content, _id } = comment;
	let isMe = userId === postedBy._id;
	const dateDay = formatDateDay(createdAt);
	const dateHour = formatDateHour(createdAt);

	const answerComment = () => {
		navigation.navigate('AnswerComment', { id: _id });
	};
	const respondOnComment = () => {
		alert('like');
	};

	return (
		<>
			<Text style={{ textAlign: 'center' }}>{dateDay}</Text>
			<View style={styles.comment_container}>
				<View style={styles.comment_item}>
					<View style={styles.comment_box}>
						<View>
							<Avatar url={postedBy.avatar} size={40} />
						</View>

						<View>
							<Text style={styles.comment_text}>{postedBy.name}</Text>
							<Text>{dateHour}</Text>
						</View>

						<View>
							<Text style={styles.comment_content}>{content}</Text>
						</View>
					</View>
					<TouchableOpacity style={{ marginRight: 10 }} onPress={respondOnComment}>
						<AntDesign name='hearto' size={24} color='black' />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.comment_handle}>
				<Pressable onPress={answerComment}>
					<Text style={styles.handle_button}>Answer</Text>
				</Pressable>

				<Text>|</Text>
				{role === 'admin' ||
					(isMe && (
						<Pressable onPress={() => removeComment(_id)}>
							<Text style={styles.handle_button}>Delete</Text>
						</Pressable>
					))}
			</View>
		</>
	);
};
