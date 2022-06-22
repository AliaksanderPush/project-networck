import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from '../Avatar/Avatar';
import { ICardPost } from './CardPost.props';
import { API_URL } from '../../service/auth-service';
import { DeleteMenu } from '../DeleteMenu/DeleteMenu';
import { styles } from './CardPost.styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FeedStackParams } from '../nav/RootScreensNav.props';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CardPost = ({ post, id }: ICardPost): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<FeedStackParams>>();
	let isMe = id === post?.postedBy._id;
	const redirectToAddComment = () => {
		navigation.navigate('AddComment', { id: post?._id });
	};
	const redirectToComments = () => {
		navigation.navigate('Comments', { id: post?._id });
	};

	return (
		<View style={styles.card_container}>
			<View style={styles.card_header}>
				<Avatar url={post?.postedBy?.avatar} size={70} />
				<View>
					<Text style={{ fontSize: 24, marginRight: isMe ? '50%' : '60%' }}>
						{post?.postedBy.name}
					</Text>
				</View>
				{isMe && <DeleteMenu id={post?._id} />}
			</View>
			<View>
				<Image
					style={styles.image}
					source={{
						uri: `${API_URL}/${post?.featuredImage}`,
					}}
				/>
			</View>

			<View style={styles.card_footer}>
				<View style={styles.card_icons}>
					<TouchableOpacity>
						<AntDesign name='like2' size={32} color='black' />
					</TouchableOpacity>
					<View>
						<TouchableOpacity onPress={redirectToAddComment} style={{ marginLeft: 15 }}>
							<FontAwesome5 name='comment' size={32} color='black' />
						</TouchableOpacity>
					</View>
				</View>

				<Text style={{ color: 'blue' }}>Likes 8</Text>
				<Text style={styles.footer_title}>{post?.title}</Text>
				<Text style={styles.footer_content}>{post?.content}</Text>
				<Pressable>
					<Text style={{ color: 'blue' }}>More...</Text>
				</Pressable>
				<Pressable onPress={redirectToComments}>
					<Text style={styles.card_footer_comment}>Comments (7)</Text>
				</Pressable>
			</View>
		</View>
	);
};
