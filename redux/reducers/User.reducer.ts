import { IUserState, UserActionTypes, UserAction } from '../types/user.types';

const initialState: IUserState = {
	user: null,
	loading: false,
	error: null,
};

export const UserReducer = (state = initialState, action: UserAction): IUserState => {
	switch (action.type) {
		case UserActionTypes.LOAD_USER:
			return {
				loading: true,
				error: null,
				user: null,
			};
		case UserActionTypes.LOAD_USER_SUCCESS:
			return {
				loading: false,
				error: null,
				user: action.payload,
			};

		case UserActionTypes.LOAD_USER_ERROR:
			return {
				loading: false,
				error: action.payload,
				user: null,
			};

		default:
			return state;
	}
};
