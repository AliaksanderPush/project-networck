import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { colors } from '../../config/Colors';
import { Entypo } from '@expo/vector-icons';
import { PrimaryButton } from '../../components/UI/Button/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { IFormProps } from './FormPost.props';
import { API_URL } from '../../service/auth-service';
import { InfoInput } from '../UI/InfoInput/InfoInput';
import { styles } from './FormPost.styles';

export const FormPost = ({
	image,
	handleCreateFoto,
	setTitl,
	setConten,
	handleSubmit,
	imgFormData,
	title,
	lable,
	content,
	loading,
}: IFormProps): JSX.Element => {
	const [img, setImg] = useState<string>();

	useEffect(() => {
		if (image) {
			setImg(image);
		}
	}, [image]);
	return (
		<KeyboardAwareScrollView>
			<View style={styles.container}>
				<View style={styles.post_image}>
					{image ? (
						<Image
							style={{ width: 340, height: 340, borderRadius: 14 }}
							source={{ uri: !imgFormData ? `${API_URL}/${img}` : img }}
						/>
					) : (
						<TouchableOpacity onPress={handleCreateFoto}>
							<Entypo name='camera' size={60} color={colors.black} />
						</TouchableOpacity>
					)}
				</View>
				{image ? (
					<TouchableOpacity onPress={handleCreateFoto}>
						<Entypo name='camera' size={32} color={colors.black} />
					</TouchableOpacity>
				) : null}
				<View style={styles.text_container}>
					<InfoInput
						position='center'
						value={title}
						setValue={setTitl}
						size={40}
						placehold='Title'
					/>

					<InfoInput
						position='top'
						value={content}
						setValue={setConten}
						size={150}
						placehold='Content'
					/>

					<View style={styles.post_button}>
						<PrimaryButton
							label={lable}
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
