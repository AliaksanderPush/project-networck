import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardPerson } from '../../components/CardPerson/CardPerson';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from '../../redux/acshions/acshions.user';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

export const People = () => {
	const dispatch = useDispatch();
	const { users, user } = useTypedSelector((state) => state.user);
	const { loading } = useTypedSelector((state) => state.AppReducer);

	useEffect(() => {
		dispatch(fetchAllUsers());
	}, [dispatch]);
	return (
		<View style={{ flex: 1 }}>
			{loading && <Text style={{ textAlign: 'center' }}>Loading...</Text>}
			<FlatList
				data={users}
				renderItem={({ item }) => {
					return <CardPerson info={item} isMe={user!} />;
				}}
			/>
		</View>
	);
};
