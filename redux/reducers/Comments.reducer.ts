import { CommentsAction, CommentsActionTypes, ICommentState } from '../types/comments.types';

const initialState: ICommentState = {
	comments: [],
};

export const CommentsReducer = (state = initialState, action: CommentsAction): ICommentState => {
	switch (action.type) {
		case CommentsActionTypes.LOAD_COMMENTS:
			return {
				...state,
				comments: action.payload,
			};
		case CommentsActionTypes.CREATE_COMMENT: {
			const { comment } = action;
			return {
				...state,
				comments: [comment, ...state.comments],
			};
		}
		case CommentsActionTypes.UPDATE_COMMENT: {
			const { updateComm } = action;
			const { comments } = state;
			const copyState = [...comments];
			const index = copyState.findIndex((item) => item._id === updateComm._id);
			console.log('reducer index>>', index);
			const after = copyState.slice(0, index);
			const before = copyState.slice(index + 1);
			const newState = [...before, updateComm, ...after];
			return {
				...state,
				comments: newState,
			};
		}
		case CommentsActionTypes.DELETE_COMMENT: {
			const { removeComm } = action;
			const { comments } = state;
			const copyState = [...comments];
			const newState = copyState.filter((item) => item._id !== removeComm._id);
			return {
				...state,
				comments: newState,
			};
		}
		default:
			return state;
	}
};
