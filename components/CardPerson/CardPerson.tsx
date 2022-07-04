import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { Avatar } from '../Avatar/Avatar';
import { PrimaryButton } from '../UI/Button/PrimaryButton';
import { ICardPerson } from './CardPerson.props';
import { arrayCommon } from '../../helpers/helper';
import { styles } from './CardPerson.style';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const CardPerson = ({ info, myId, friends }: ICardPerson): JSX.Element => {
	const [friendsId, setFriendsId] = useState<boolean>(false);
	const { name, avatar } = info;
	const Iam = myId === info?._id;
	const { addFriend, deleteFriend } = useActions();
	console.log(friendsId);
	const handlerFriend = () => {
		if (info?._id) {
			deleteFriend(info._id);
		} else {
			addFriend(info._id);
		}
	};

	useEffect(() => {
		const res = arrayCommon(info._id, friends);
		console.log('res!>>>', res);
	}, []);

	return (
		<>
			{!Iam && (
				<View style={styles.person_container}>
					<View style={styles.person_header}>
						<Avatar border={true} path={avatar} size={70} />
						<View>
							<Text style={styles.person_name}>{name}</Text>
						</View>
						<View style={styles.person_btn}>
							<PrimaryButton
								label={!friendsId ? 'Add to friends' : 'Delete from frends'}
								setValue={handlerFriend}
							/>
						</View>
					</View>
				</View>
			)}
		</>
	);
};
