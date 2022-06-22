import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CircleLogo } from '../../components/UI/CircleLogo/CircleLogo';
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../config/Colors';
import { styles } from './Account.styles';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AcccountStackParams } from '../../components/nav/RootScreensNav.props';
import { API_URL } from '../../service/auth-service';
import { SmallCardPost } from '../../components/SmallCardPost/SmallCardPost';
import { createFormdata, createFoto } from '../../helpers/helper';
import { EditMenu } from '../../components/EditMenu/EditMenu';
import { FormDataProps } from './Account.props';

export const Account = (): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<AcccountStackParams>>();
	const { user } = useTypedSelector((state) => state.user);
	const { posts } = useTypedSelector((state) => state.posts);
	const { upDateAvatar } = useActions();
	const [image, setImage] = useState<string>('');

	const handleCreateFoto = async () => {
		const uri = await createFoto();
		setImage(uri as string);
		const formData = createFormdata(uri as string);
		upDateAvatar(formData);
	};

	const filterPostById = () => {
		return posts.filter((item) => item.postedBy._id === user?._id);
	};

	useEffect(() => {
		if (posts) {
			filterPostById();
		}
	}, [posts]);

	const myPost = filterPostById();

	return (
		<KeyboardAwareScrollView>
			<Text style={styles.text_title}>{user?.name}</Text>
			<View style={styles.container}>
				<View>
					<CircleLogo>
						{user?.avatar ? (
							<Image
								style={{
									width: 190,
									height: 190,
									marginVertical: 20,
									borderRadius: 100,
								}}
								source={{ uri: `${API_URL}/${user?.avatar}` }}
							/>
						) : image ? (
							<Image
								style={{
									width: 190,
									height: 190,
									marginVertical: 20,
									borderRadius: 100,
								}}
								source={{
									uri: image,
								}}
							/>
						) : (
							<TouchableOpacity onPress={handleCreateFoto}>
								<Entypo name='camera' size={60} color={colors.gray1} />
							</TouchableOpacity>
						)}
					</CircleLogo>

					{user?.avatar ? (
						<TouchableOpacity
							style={{ alignItems: 'center' }}
							onPress={handleCreateFoto}
						>
							<Entypo name='camera' size={32} color='black' />
						</TouchableOpacity>
					) : null}
					<View style={{ alignItems: 'center', marginTop: 20 }}>
						<EditMenu path='UpdateProfile' />
					</View>
				</View>
				<View style={styles.info}>
					<View>
						<Text style={styles.info_text}>Posts</Text>
						<Text style={styles.info_count}>23</Text>
					</View>
					<View>
						<Text style={styles.info_text}>Friends</Text>
						<Text style={styles.info_count}>12</Text>
					</View>
					<View>
						<Text style={styles.info_text}>Comments</Text>
						<Text style={styles.info_count}>4</Text>
					</View>
				</View>
			</View>
			<View style={styles.status}>
				<Text style={styles.status_text}>Open to work</Text>
			</View>
			<Text style={styles.status_text_item}>My status</Text>
			<View style={styles.post_container}>
				{myPost?.map((item, index) => (
					<React.Fragment key={item.slug}>
						<SmallCardPost img={item.featuredImage} cardId={item._id} />
					</React.Fragment>
				))}
			</View>
		</KeyboardAwareScrollView>
	);
};
