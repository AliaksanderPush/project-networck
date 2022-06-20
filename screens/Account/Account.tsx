import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { CircleLogo } from '../../components/UI/CircleLogo/CircleLogo';
import { Entypo } from '@expo/vector-icons';
import { FormDataProps } from './Account.props';
import { colors } from '../../config/Colors';
import { styles } from './Account.styles';
import * as ImagePicker from 'expo-image-picker';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AcccountStackParams } from '../../components/nav/RootScreensNav.props';
import { API_URL } from '../../service/auth-service';
import { SmallCardPost } from '../../components/SmallCardPost/SmallCardPost';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/acshions/acshions.post';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Account = (): JSX.Element => {
	const navigation = useNavigation<NativeStackNavigationProp<AcccountStackParams>>();
	const { user } = useTypedSelector((state) => state.user);
	const { posts } = useTypedSelector((state) => state.posts);
	const { upDateAvatar } = useActions();
	const dispatch = useDispatch();
	const [image, setImage] = useState<string>('');
	console.log('user>>', user);

	const handleCreateFoto = async () => {
		const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (permissionResult.granted === false) {
			return alert('camera access is required');
		}
		const pickerResult = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			width: 100,
		});
		if (!!pickerResult.cancelled) {
			return;
		}

		setImage(pickerResult.uri);

		const formData: FormDataProps = new FormData();
		formData.append('filedata', {
			name: 'filedata',
			uri: pickerResult.uri,
			type: 'image/jpg',
		});

		upDateAvatar(formData);
	};

	const filterPostById = () => {
		return posts.filter((item) => item.postedBy._id === user?._id);
	};

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

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

					<TouchableOpacity
						style={{ alignItems: 'center', marginTop: 20 }}
						onPress={() => navigation.navigate('UpdateProfile')}
					>
						<FontAwesome name='edit' size={32} color='black' />
					</TouchableOpacity>
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
						<SmallCardPost img={item.featuredImage} />
					</React.Fragment>
				))}
			</View>
		</KeyboardAwareScrollView>
	);
};
