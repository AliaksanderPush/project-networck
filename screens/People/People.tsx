import React, { useEffect, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardPerson } from '../../components/CardPerson/CardPerson';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from '../../redux/acshions/acshions.user';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';

const People = () => {
	const dispatch = useDispatch();
	const { users, user } = useTypedSelector((state) => state.user);
	const { friends } = useTypedSelector((state) => state.friends);

	useEffect(() => {
		dispatch(fetchAllUsers());
	}, []);
	return (
		<View style={{ flex: 1 }}>
			<FlatList
				data={users}
				renderItem={({ item }) => {
					return <CardPerson friends={friends} info={item} myId={user!._id} />;
				}}
			/>
		</View>
	);
};
export default React.memo(People);
