import { Dispatch } from 'redux';
import { IPost } from '../../user/User.props';
import { getPostsAll } from '../../service/posts.service';
import { PostsAction, PostsActionTypes } from '../types/posts.types';
import { AppAction, AppActionTypes } from '../types/app.types';
import { loaderOn, errorOn } from './acshions.app';

export const fetchPosts = () => {
	return async (dispatch: Dispatch<PostsAction | AppAction>) => {
		try {
			dispatch({ type: AppActionTypes.LOADER_DISPLAY_ON });
			const response = await getPostsAll();
			const { data } = response;

			dispatch({
				type: PostsActionTypes.LOAD_POST_SUCCESS,
				payload: data,
			});
			dispatch({ type: AppActionTypes.LOADER_DISPLAY_OFF });
		} catch (err: any) {
			dispatch({
				type: AppActionTypes.ERROR_DISPLAY_ON,
				payload: err.response.data,
			});
		}
	};
};
