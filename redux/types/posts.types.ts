import { IPost } from '../../user/User.props';

export interface IPostState {
	posts: IPost[];
}

export enum PostsActionTypes {
	LOAD_POSTS = 'LOAD_POSTS',
	CREATE_POST = 'CREATE_POST',
}

interface ILoadPostsAction {
	type: PostsActionTypes.LOAD_POSTS;
	payload: IPost[];
}
interface ICreatePostAction {
	type: PostsActionTypes.CREATE_POST;
	myPost: IPost;
}

export type PostsAction = ILoadPostsAction | ICreatePostAction;
