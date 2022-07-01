import { FriendsAction, FriendsActionTypes, IFriendsState } from '../types/friends.types';

const initialState: IFriendsState = {
	friends: [],
};

export const FriendsReducer = (state = initialState, action: FriendsAction): IFriendsState => {
	switch (action.type) {
		case FriendsActionTypes.LOAD_FRIENDS_SUCCESS:{
			return {
				...state,
				friends: action.payload,
			}
		}
		case FriendsActionTypes.READ_MESSAGER_FROM_FRIEND:
         const copyState = [...state.friends];
         const newState = copyState.map(item =>   {
			countMessages(item.messages, action.date)
		 }



			return {
				...state,
				friends: newState,
			}
		


		default:
			return state;
	}
}
