import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from '../Avatar/Avatar';
import { PrimaryButton } from '../UI/Button/PrimaryButton';
import { ICardPerson } from './CardPerson.props';
import { styles } from './CardPerson.style';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import EVENTS from '../../config/events';

export const CardPerson = ({ info, myId, isFriends }: ICardPerson): JSX.Element => {
	const { name, avatar } = info;
	const Iam = myId === info?._id;
	const { addFriend, deleteFriend } = useActions();
	const { socket } = useTypedSelector((state) => state.SocketReducer);
	const handlerFriend = () => {
		if (isFriends) {
			deleteFriend(info._id);
		} else {
			if (socket) {
				addFriend(info._id, myId, socket);
			}
		}
	};

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
								label={!isFriends ? 'Add to friends' : 'Delete from frends'}
								setValue={handlerFriend}
							/>
						</View>
					</View>
				</View>
			)}
		</>
	);
};
