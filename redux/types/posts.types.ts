import { IPost } from '../../user/User.props';

export interface IPostState {
	posts: IPost[];
	loading: boolean;
	error: null | string;
}

export enum PostsActionTypes {
	LOAD_POST = 'LOAD_POST',
	LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS',
	LOAD_POST_ERROR = 'LOAD_POST_ERROR',
}

interface ILoadPostsAction {
	type: PostsActionTypes.LOAD_POST;
}

interface ILoadSuccessPostsAction {
	type: PostsActionTypes.LOAD_POST_SUCCESS;
	payload: IPost[];
}

interface ILoadErrorPostsAction {
	type: PostsActionTypes.LOAD_POST_ERROR;
	payload: string;
}

export type PostsAction = ILoadPostsAction | ILoadSuccessPostsAction | ILoadErrorPostsAction;
