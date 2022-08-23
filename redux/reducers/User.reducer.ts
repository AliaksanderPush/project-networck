import { IUserState, UserActionTypes, UserAction } from '../types/user.types';

const initialState: IUserState = {
	user: null,
	tokens: null,
};

export const UserReducer = (state = initialState, action: UserAction): IUserState => {
	switch (action.type) {
		case UserActionTypes.LOAD_USER_SUCCESS:
			const { payload } = action;

			return {
				user: payload.searchUser,
				tokens: payload.token,
			};

		case UserActionTypes.SINGOUT_USER:
			return {
				user: null,
				tokens: null,
			};

		case UserActionTypes.UPDATE_USER: {
			const { updateUser } = action;
			return {
				...state,
				user: updateUser.searchUser,
				tokens: updateUser.token,
			};
		}
		case UserActionTypes.UPDATE_AVATAR: {
			const { img } = action;
			const newState = { ...state.user! };
			newState['avatar'] = img;
			return {
				...state,
				user: newState,
			};
		}

		default:
			return state;
	}
};
