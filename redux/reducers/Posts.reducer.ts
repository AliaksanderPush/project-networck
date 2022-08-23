import { IPostState, PostsAction, PostsActionTypes } from '../types/posts.types';

const initialState: IPostState = {
	posts: [],
};

export const PostsReducer = (state = initialState, action: PostsAction): IPostState => {
	switch (action.type) {
		case PostsActionTypes.LOAD_POSTS:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
};
