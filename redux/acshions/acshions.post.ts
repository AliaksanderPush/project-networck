import { Dispatch } from 'redux';
import { ICreatePost } from '../../user/User.props';
import { createPost, getPostsAll } from '../../service/posts.service';
import { PostsAction, PostsActionTypes } from '../types/posts.types';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { upLoadFileImage } from '../../service/service';

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

export const createPosts = (post: ICreatePost) => {
	return async (dispatch: Dispatch<PostsAction | AppAction>) => {
		const { title, content, formData } = post;
		try {
			dispatch(loaderOn());
			const img = await upLoadFileImage(formData);
			const response = await createPost({ title, content, featuredImage: img });
			const { data } = response;
			dispatch({
				type: PostsActionTypes.CREATE_POST,
				myPost: data,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
