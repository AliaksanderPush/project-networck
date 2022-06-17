import { IPost } from '../../user/User.props';

export interface IPostState {
	posts: IPost[];
}

export enum PostsActionTypes {
	LOAD_POSTS = 'LOAD_POSTS',
}

interface ILoadPostsAction {
	type: PostsActionTypes.LOAD_POSTS;
	payload: IPost[];
}

export type PostsAction = ILoadPostsAction;
