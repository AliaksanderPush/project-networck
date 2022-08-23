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
		case PostsActionTypes.CREATE_POST: {
			const { myPost } = action;
			return {
				...state,
				posts: [...state.posts, myPost],
			};
		}
		default:
			return state;
	}
};
