import React from 'react';
import { View, Text, Image, Pressable, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from '../Avatar/Avatar';
import { IPost } from '../../user/User.props';
import { styles } from './CardPost.styles';
import { ICardPost } from './CardPost.props';
import { API_URL } from '../../service/auth-service';

export const CardPost = ({ post }: ICardPost): JSX.Element => {
	console.log('post in CardPost>>', post);
	const { postedBy, featuredImage, content, title } = post;
	return (
		<View style={styles.card_container}>
			<View style={styles.card_header}>
				<Avatar url={postedBy.avatar} size={70} />
				<View>
					<Text style={styles.card_header_text}>{postedBy.name}</Text>
				</View>
			</View>
			<View>
				<Image
					style={styles.image}
					source={{
						uri: `${API_URL}/${featuredImage}`,
					}}
				/>
			</View>

			<View style={styles.card_footer}>
				<View style={styles.card_icons}>
					<TouchableHighlight>
						<AntDesign name='like2' size={32} color='black' />
					</TouchableHighlight>
					<TouchableHighlight style={{ marginLeft: 15 }}>
						<FontAwesome5 name='comment' size={32} color='black' />
					</TouchableHighlight>
				</View>

				<Text style={{ color: 'blue' }}>Likes 8</Text>
				<Text style={styles.footer_title}>{title}</Text>
				<Text style={styles.footer_content}>{content}</Text>
				<Pressable>
					<Text style={{ color: 'blue' }}>More...</Text>
				</Pressable>
				<Pressable>
					<Text style={styles.card_footer_comment}>Comments (7)</Text>
				</Pressable>
			</View>
		</View>
	);
};
