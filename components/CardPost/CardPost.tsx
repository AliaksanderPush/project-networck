import React, { useEffect, useState, memo } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from '../Avatar/Avatar';
import { ICardPost } from './CardPost.props';
import { API_URL } from '../../service/auth-service';
import { DeleteMenu } from '../DeleteMenu/DeleteMenu';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FeedStackParams } from '../nav/RootScreensNav.props';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { formatDateTime } from '../../helpers/helper';
import VideoPlayer from '../Video/VideoPlayer';
import { styles } from './CardPost.styles';

const CardPost = ({ post, id, hide }: ICardPost): JSX.Element => {
	const [show, setShow] = useState<boolean>(false);
	const navigation = useNavigation<NativeStackNavigationProp<FeedStackParams>>();
	const { user } = useTypedSelector((state) => state.user);
	const { countViews, like, unLike } = useActions();
	const date = formatDateTime(post?.createdAt);
	const isMe = id === post?.postedBy._id;
	const type = post?.featuredImage.split('.')[1] === 'mov';

	const redirectToAddComment = () => {
		navigation.navigate('AddComment', { id: post?._id });
	};
	const redirectToComments = () => {
		navigation.navigate('Comments', { id: post?._id });
	};
	const redirectPostDetails = () => {
		if (post) {
			countViews(post?._id);
		}
		navigation.navigate('PostDetails', { id: post?._id });
	};

	const showDesrciption = () => {
		setShow(!show);
	};

	const handleLikes = () => {
		if (post) {
			like(post._id);
		}
	};

	const handleDisLikes = () => {
		if (post) {
			unLike(post._id);
		}
	};

	useEffect(() => {
		setShow(hide);
	}, []);

	return (
		<View style={styles.card_container}>
			<View style={styles.card_header}>
				<Avatar path={post?.postedBy?.avatar} size={70} border={true} />
				<View>
					<Text style={{ fontSize: 24, marginRight: isMe ? '50%' : '60%' }}>
						{post?.postedBy.name}
					</Text>
				</View>
				{isMe && <DeleteMenu id={post?._id} />}
			</View>
			<Pressable onPress={redirectPostDetails}>
				{!type ? (
					<Image
						style={styles.image}
						source={{
							uri: `${API_URL}/${post?.featuredImage}`,
						}}
					/>
				) : (
					<VideoPlayer videoURI={`${API_URL}/${post?.featuredImage}`} />
				)}
			</Pressable>

			<View style={styles.card_footer}>
				<View style={styles.card_options}>
					<View style={styles.card_icons}>
						{post?.likes.includes(user?._id!) ? (
							<TouchableOpacity
								onPress={handleDisLikes}
								style={{ marginHorizontal: 10 }}
							>
								<AntDesign name='dislike1' size={32} color='black' />
							</TouchableOpacity>
						) : (
							<TouchableOpacity onPress={handleLikes}>
								<AntDesign name='like2' size={32} color='black' />
							</TouchableOpacity>
						)}
						<View>
							<TouchableOpacity
								onPress={redirectToAddComment}
								style={{ marginHorizontal: 15 }}
							>
								<FontAwesome5 name='comment' size={32} color='black' />
							</TouchableOpacity>
						</View>
						<View>
							<TouchableOpacity>
								<Entypo name='eye' size={32} color='black' />
							</TouchableOpacity>
							<Text style={{ textAlign: 'center' }}>{post?.views}</Text>
						</View>
					</View>
					<View>
						<Text>{date}</Text>
					</View>
				</View>

				<Text style={{ color: 'blue' }}>Likes {post?.likes.length}</Text>
				<Text style={styles.footer_title}>{post?.title}</Text>
				{!show && <Text style={styles.footer_content}>{post?.content}</Text>}
				<Pressable onPress={showDesrciption}>
					<Text style={{ color: 'blue' }}>More...</Text>
				</Pressable>
				<Pressable onPress={redirectToComments}>
					<Text style={styles.card_footer_comment}>
						Comments ({post?.comments.length})
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default memo(CardPost);
