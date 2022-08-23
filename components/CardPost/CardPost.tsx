import React from 'react';
import { View, Text, Image, Pressable, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Avatar } from '../Avatar/Avatar';
import { styles } from './CardPost.styles';

export const CardPost = () => {
	return (
		<View style={styles.card_container}>
			<View style={styles.card_header}>
				<Avatar />
				<View>
					<Text style={styles.card_header_text}>Name</Text>
				</View>
			</View>
			<View>
				<Image
					style={styles.image}
					source={{
						uri: 'https://cdn.pixabay.com/photo/2022/06/11/21/38/puffin-7257000__340.jpg',
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

				<Text style={styles.footer_content}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum reprehenderit
					neque dolore ab labore laudantium voluptas, ducimus facilis adipisci temporibus,
					ratione animi molestias reiciendis praesentium excepturi nam iure nesciunt amet?
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate suscipit
					incidunt enim placeat, cumque, aperiam corporis rem aspernatur labore magnam
					vero accusantium amet mollitia excepturi, veritatis autem numquam perferendis
					quia! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quod
					cupiditate est ullam eum consectetur, aliquam sint autem libero deserunt
					voluptatibus expedita sit temporibus dolore deleniti quis quas perspiciatis
					necessitatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
					assumenda eius minima minus quas consectetur illum debitis recusandae dolore!
					Labore, amet. Perferendis eveniet autem eligendi quaerat ad soluta voluptatem
					quas?
				</Text>
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
