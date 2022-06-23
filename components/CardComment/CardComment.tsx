import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { formatDateDay, formatDateHour } from '../../helpers/helper';
import { Avatar } from '../Avatar/Avatar';
import { FeedStackParams } from '../nav/RootScreensNav.props';
import { ICardComment } from './CardComment.props';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './CardComment.style';

export const CardComments = ({
	comment,
	userId,
	role,
	postId,
	removeComment,
}: ICardComment): JSX.Element => {
	const [respond, setRespond] = useState<boolean>(false);
	const navigation = useNavigation<NativeStackNavigationProp<FeedStackParams>>();
	const { postedBy, createdAt, content, _id } = comment;
	let isMe = userId === postedBy._id;
	const dateDay = formatDateDay(createdAt);
	const dateHour = formatDateHour(createdAt);

	const answerComment = () => {
		navigation.navigate('AddComment', { id: postId });
	};
	const respondOnComment = () => {
		setRespond(!respond);
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

						<View style={{ maxWidth: 240 }}>
							<Text style={styles.comment_content}>{content}</Text>
						</View>
					</View>
					<TouchableOpacity style={{ marginRight: 10 }} onPress={respondOnComment}>
						<AntDesign name='hearto' size={24} color={respond ? 'red' : 'black'} />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.comment_handle}>
				<Pressable onPress={answerComment}>
					<Text style={styles.handle_button}>Answer</Text>
				</Pressable>

				{role === 'admin' ||
					(isMe && (
						<>
							<Text>|</Text>
							<Pressable onPress={() => removeComment(_id)}>
								<Text style={styles.handle_button}>Delete</Text>
							</Pressable>
						</>
					))}
			</View>
		</>
	);
};
