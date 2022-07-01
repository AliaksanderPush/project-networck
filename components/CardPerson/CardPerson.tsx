import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { Avatar } from '../Avatar/Avatar';
import { PrimaryButton } from '../UI/Button/PrimaryButton';
import { ICardPerson } from './CardPerson.props';
import { arrayCommon } from '../../helpers/helper';
import { styles } from './CardPerson.style';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const CardPerson = ({ info, isMe }: ICardPerson): JSX.Element => {
	const [friendsId, setFriendsId] = useState<string | undefined>(undefined);
	const { name, avatar, _id } = info;
	const Iam = isMe._id === _id;
	const { loading } = useTypedSelector((state) => state.AppReducer);
	const { createNewFriend, deleteFriend } = useActions();

	const handlerFriend = () => {
		if (friendsId && info?._id) {
			deleteFriend(friendsId, info._id);
		} else {
			if (info._id) {
				createNewFriend(info._id);
			}
		}
	};

	useEffect(() => {
		if (info && isMe) {
			const res = arrayCommon(isMe.contacts, info.contacts);
			setFriendsId(res);
		}
	}, [info, isMe]);

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
								loading={loading}
							/>
						</View>
					</View>
				</View>
			)}
		</>
	);
};
