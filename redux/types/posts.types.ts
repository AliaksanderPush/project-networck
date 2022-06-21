import { IPost } from '../../user/User.props';

export interface IPostState {
	posts: IPost[];
}

export enum PostsActionTypes {
	LOAD_POSTS = 'LOAD_POSTS',
	CREATE_POST = 'CREATE_POST',
	UPDATE_POST = 'UPDATE_POST',
	DELETE_POST = 'DELETE_POST',
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

export type PostsAction =
	| ILoadPostsAction
	| ICreatePostAction
	| IUpdatePostAction
	| IDeletePostAction;
