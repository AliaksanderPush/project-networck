import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { CardPerson } from '../../components/CardPerson/CardPerson';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from '../../redux/acshions/acshions.user';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { isFriends } from '../../helpers/helper';
import { fetchFriends } from '../../redux/acshions/acshions.friends';

const People = (): JSX.Element => {
	const dispatch = useDispatch();
	const { users, user } = useTypedSelector((state) => state.user);
	const { friends } = useTypedSelector((state) => state.friends);
	const { socket } = useTypedSelector((state) => state.SocketReducer);

	useEffect(() => {
		dispatch(fetchAllUsers());
		if (socket) {
			dispatch(fetchFriends(socket));
		}
	}, []);
	if (!friends) {
		return <View></View>;
	}
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={users}
				renderItem={({ item }) => {
					return (
						<CardPerson
							isFriends={isFriends(item._id, friends)}
							info={item}
							myId={user!._id}
						/>
					);
				}}
			/>
		</View>
	);
};
export default React.memo(People);
