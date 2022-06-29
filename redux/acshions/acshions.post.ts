import { Dispatch } from 'redux';
import { ICreatePost, IPost } from '../../user/User.props';
import {
	createPost,
	getPostsAll,
	likePost,
	removePost,
	unlikePost,
	viewPost,
} from '../../service/posts.service';
import { PostsAction, PostsActionTypes } from '../types/posts.types';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { upLoadFileImage } from '../../service/service';
import { FormDataProps } from '../../screens/Account/Account.props';

export const fetchPosts = (): any => {
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
		const { title, content, image } = post;
		try {
			dispatch(loaderOn());
			const img = await upLoadFileImage(image as FormDataProps);
			const response = await createPost({
				title,
				content,
				featuredImage: img,
			});
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

const upPost = (data: PostsAction | AppAction, type: PostsActionTypes) => {
	return {
		type: PostsActionTypes.UPDATE_POST,
		updatePost: data,
	};
};

export const deletePosts = (id: string) => {
	return async (dispatch: Dispatch<PostsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await removePost(id);
			const { data } = response;
			dispatch({
				type: PostsActionTypes.DELETE_POST,
				remId: data._id,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const countViews = (id: string) => {
	return async (dispatch: Dispatch<PostsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await viewPost(id);
			const { data } = response;
			dispatch({
				type: PostsActionTypes.VIEW_COUNT,
				countId: data._id,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
export const like = (id: string) => {
	return async (dispatch: Dispatch<PostsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await likePost(id);
			const { data } = response;
			console.log('priletelo>>', data.likes);
			dispatch({
				type: PostsActionTypes.LIKE_POST,
				like: data,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
export const unLike = (id: string) => {
	return async (dispatch: Dispatch<PostsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await unlikePost(id);
			const { data } = response;
			dispatch({
				type: PostsActionTypes.DISLIKE_POST,
				disLike: data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
