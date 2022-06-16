import { IPostState, PostsAction, PostsActionTypes } from '../types/posts.types';

const initialState: IPostState = {
	posts: [],
	loading: false,
	error: null,
};

export const PostsReducer = (state = initialState, action: PostsAction): IPostState => {
	switch (action.type) {
		case PostsActionTypes.LOAD_POST:
			return {
				loading: true,
				error: null,
				posts: [],
			};
		case PostsActionTypes.LOAD_POST_SUCCESS:
			const { payload } = action;
			return {
				loading: false,
				error: null,
				posts: payload,
			};

		case PostsActionTypes.LOAD_POST_ERROR:
			return {
				loading: false,
				error: action.payload,
				posts: [],
			};

		default:
			return state;
	}
};
