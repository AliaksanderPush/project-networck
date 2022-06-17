import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useEvent } from 'react-native-reanimated';
import { CardPost } from '../../components/CardPost/CardPost';

import { styles } from './Friends.styles';

export const Friends = () => {
	return (
		<KeyboardAwareScrollView>
			<View style={styles.friends_page}>
				<CardPost />
				<CardPost />
			</View>
		</KeyboardAwareScrollView>
	);
};
