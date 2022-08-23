import { AnyAction, Dispatch } from 'redux';
import { IPost } from '../../user/User.props';
import { getPostsAll } from '../../service/posts.service';
import { PostsAction, PostsActionTypes } from '../types/posts.types';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';

export const fetchPosts = () => {
	return async (dispatch: Dispatch<PostsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await getPostsAll();

			const { data } = response;
			dispatch({
				type: PostsActionTypes.LOAD_POSTS,
				payload: data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
