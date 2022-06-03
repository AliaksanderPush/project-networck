import { IUserState, UserActionTypes, UserAction } from '../types/user.types';

const initialState: IUserState = {
	user: null,
	loading: false,
	error: null,
	tokens: null,
};

export const UserReducer = (state = initialState, action: UserAction): IUserState => {
	switch (action.type) {
		case UserActionTypes.LOAD_USER:
			return {
				loading: true,
				error: null,
				user: null,
				tokens: null,
			};
		case UserActionTypes.LOAD_USER_SUCCESS:
			const { payload } = action;

			return {
				loading: false,
				error: null,
				user: payload.searchUser,
				tokens: payload.token,
			};

		case UserActionTypes.LOAD_USER_ERROR:
			return {
				loading: false,
				error: action.payload,
				user: null,
				tokens: null,
			};

		case UserActionTypes.SINGOUT_USER:
			return {
				loading: false,
				error: null,
				user: null,
				tokens: null,
			};

		case UserActionTypes.UPDATE_USER:
			const { updateUser } = action;
			console.log('payload>>>', updateUser);
			return {
				loading: false,
				error: null,
				user: updateUser.searchUser,
				tokens: updateUser.token,
			};

		default:
			return state;
	}
};
