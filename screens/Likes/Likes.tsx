import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Menu } from '../../components/UI/Menu/Menu';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useEffect } from 'react';
import EVENTS from '../../config/events';

const Likes = () => {
	const { friends } = useTypedSelector((state) => state.friends);
	const { socket } = useTypedSelector((state) => state.SocketReducer);

	const onPress = () => {
		socket!.on(EVENTS.SERVER.JOINED_ROOM, (currName: string) => {
			console.log('like name>>>', currName);
		});
	};

	return (
		<>
			<TouchableOpacity onPress={onPress}>
				<Text>Press Here</Text>
			</TouchableOpacity>
		</>
	);
};

export default React.memo(Likes);
