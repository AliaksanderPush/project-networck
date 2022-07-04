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

		default:
			return state;
	}
};
