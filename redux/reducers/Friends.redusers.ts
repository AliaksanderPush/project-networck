import { FriendsAction, FriendsActionTypes, IFriendsState } from '../types/friends.types';

const initialState: IFriendsState = {
	friends: [],
};

export const FriendsReducer = (state = initialState, action: FriendsAction): IFriendsState => {
	switch (action.type) {
		case FriendsActionTypes.LOAD_FRIENDS_SUCCESS:
			return {
				...state,
				friends: action.payload,
			};
		case FriendsActionTypes.ADD_FRIEND: {
			const { friend } = action;
			return {
				...state,
				friends: [friend, ...state.friends],
			};
		}

		default:
			return state;
	}
};
