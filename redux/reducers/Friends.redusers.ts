import { FriendsAction, FriendsActionTypes, IFriendsState } from '../types/friends.types';

const initialState: IFriendsState = {
	friends: [],
};

export const FriendsReducer = (state = initialState, action: FriendsAction): IFriendsState => {
	switch (action.type) {
		case FriendsActionTypes.LOAD_FRIENDS_SUCCESS: {
			return {
				...state,
				friends: action.payload,
			};
		}
		case FriendsActionTypes.ADD_FRIENDS: {
			return {
				...state,
				friends: [...state.friends, action.friend],
			};
		}
		case FriendsActionTypes.DELETE_FRIEND: {
			const { friendId } = action;
			const copyFriends = [...state.friends];
			const newState = copyFriends.filter((item) => item._id !== friendId);

			return {
				...state,
				friends: newState,
			};
		}

		default:
			return state;
	}
};
