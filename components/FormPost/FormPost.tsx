import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { colors } from '../../config/Colors';
import { Entypo } from '@expo/vector-icons';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { FormDataProps } from '../../screens/Account/Account.props';
import { createFoto } from '../../helpers/helper';
import { styles } from './FormPost.styles';
import { useNavigation } from '@react-navigation/core';
import { AddPostProps } from '../../screens/AddPost/AddPost.props';
import { IFormProps } from './FormPost.props';

export const FormPost = ({
	image,
	handleCreateFoto,
	setTitl,
	setConten,
	handleSubmit,
	title,
	content,
	loading,
}: IFormProps): JSX.Element => {
	return (
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<View style={styles.post_image}>
					{image ? (
						<Image style={{ width: 250, height: 250 }} source={{ uri: image }} />
					) : (
						<TouchableOpacity onPress={handleCreateFoto}>
							<Entypo name='camera' size={60} color={colors.gray1} />
						</TouchableOpacity>
					)}
				</View>
				{image ? (
					<TouchableOpacity onPress={handleCreateFoto}>
						<Entypo name='camera' size={32} color={colors.black} />
					</TouchableOpacity>
				) : null}
				<View style={styles.text_container}>
					<Text style={{ marginLeft: '10%' }}>Title</Text>
					<TextInput
						style={styles.input_title}
						onChangeText={(text) => setTitl(text)}
						value={title}
					/>
					<Text style={{ marginLeft: '10%' }}>Content</Text>
					<TextInput
						style={styles.input}
						multiline={true}
						numberOfLines={4}
						onChangeText={(text) => setConten(text)}
						value={content}
					/>
					<View style={styles.post_button}>
						<PrimaryButton
							label='Add Post'
							size={10}
							loading={loading}
							setValue={handleSubmit}
						/>
					</View>
				</View>
			</View>
		</KeyboardAwareScrollView>
	);
};
