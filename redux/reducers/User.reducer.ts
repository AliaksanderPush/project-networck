import { removeFriendId } from '../../helpers/helper';
import { IUserState, UserActionTypes, UserAction } from '../types/user.types';

const initialState: IUserState = {
	user: null,
	tokens: null,
	users: [],
};

export const UserReducer = (state = initialState, action: UserAction): IUserState => {
	switch (action.type) {
		case UserActionTypes.LOAD_USER_SUCCESS:
			const { payload } = action;

			return {
				user: payload.searchUser,
				tokens: payload.token,
				users: [],
			};

		case UserActionTypes.SINGOUT_USER:
			return {
				user: null,
				tokens: null,
				users: [],
			};

		case UserActionTypes.UPDATE_USER: {
			const { updateUser } = action;
			return {
				...state,
				user: updateUser.searchUser,
				tokens: updateUser.token,
			};
		}
		case UserActionTypes.GET_ALL_USERS: {
			const { users } = action;
			return {
				...state,
				users,
			};
		}
		case UserActionTypes.ADD_FRIENDS: {
			const { upUser } = action;
			return {
				...state,
				user: upUser,
			};
		}
		case UserActionTypes.DELETE_FRIEND: {
			const { frModel, remUser } = action;
			const { user, users } = state;
			const newUser = { ...user! };
			const { contacts } = newUser;
			const newContacts = removeFriendId(contacts, frModel);
			newUser.contacts = newContacts;

			const listUsers = [...users];
			const index = listUsers.findIndex((item) => {
				return item._id === remUser;
			});

			if (index !== -1) {
				const friendContacts = removeFriendId(listUsers[index].contacts, frModel);
				listUsers[index].contacts = friendContacts;
			}

			return {
				...state,
				user: newUser,
				users: listUsers,
			};
		}

		default:
			return state;
	}
};
