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
		case PostsActionTypes.UPDATE_POST: {
			const { updatePost } = action;
			const { posts } = state;
			const copyState = [...posts];
			const index = copyState.findIndex((item) => item._id === updatePost._id);
			const after = copyState.slice(0, index);
			const before = copyState.slice(index + 1);
			const newState = [updatePost, ...before, ...after];
			return {
				...state,
				posts: newState,
			};
		}
		case PostsActionTypes.DELETE_POST: {
			const { remId } = action;
			const { posts } = state;
			const copyState = [...posts];
			const newState = copyState.filter((item) => item._id !== remId);
			return {
				...state,
				posts: newState,
			};
		}

		default:
			return state;
	}
};
