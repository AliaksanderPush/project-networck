import { Dispatch } from 'redux';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { FriendsAction, FriendsActionTypes } from '../types/friends.types';
import { getFriendsAll } from '../../service/friends.service';

export const fetchFriends = (): any => {
	return async (dispatch: Dispatch<FriendsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await getFriendsAll();
			const { data } = response;
			console.log('priletelo!>>>', data);
			dispatch({
				type: FriendsActionTypes.LOAD_FRIENDS_SUCCESS,
				payload: data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
