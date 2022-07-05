import { IPost } from '../../types/types';

export interface IPostState {
	posts: IPost[];
}

export enum PostsActionTypes {
	LOAD_POSTS = 'LOAD_POSTS',
	CREATE_POST = 'CREATE_POST',
	UPDATE_POST = 'UPDATE_POST',
	DELETE_POST = 'DELETE_POST',
	VIEW_COUNT = 'VIEW_COUNT',
	LIKE_POST = 'LIKE_POST',
	DISLIKE_POST = 'DISLIKE_POST',
}

interface ILoadPostsAction {
	type: PostsActionTypes.LOAD_POSTS;
	payload: IPost[];
}
interface ICreatePostAction {
	type: PostsActionTypes.CREATE_POST;
	myPost: IPost;
}
interface IUpdatePostAction {
	type: PostsActionTypes.UPDATE_POST;
	updatePost: IPost;
}

interface IDeletePostAction {
	type: PostsActionTypes.DELETE_POST;
	remId: string;
}
interface IViewCountPostAction {
	type: PostsActionTypes.VIEW_COUNT;
	countId: string;
}

interface ILikePostAction {
	type: PostsActionTypes.LIKE_POST;
	like: IPost;
}
interface IDisLikePostAction {
	type: PostsActionTypes.DISLIKE_POST;
	disLike: IPost;
}

export type PostsAction =
	| ILoadPostsAction
	| ICreatePostAction
	| IUpdatePostAction
	| IDeletePostAction
	| IViewCountPostAction
	| ILikePostAction
	| IDisLikePostAction;
