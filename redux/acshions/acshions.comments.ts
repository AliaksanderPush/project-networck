import { Dispatch } from 'redux';
import { AppAction } from '../types/app.types';
import { loaderOn, errorOn, loaderOff } from './acshions.app';
import { CommentsAction, CommentsActionTypes } from '../types/comments.types';
import {
	createComment,
	deleteComment,
	getCommentsAll,
	updateComment,
} from '../../service/comment.service';

export const fetchComments = (): any => {
	return async (dispatch: Dispatch<CommentsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await getCommentsAll();
			const { data } = response;
			dispatch({
				type: CommentsActionTypes.LOAD_COMMENTS,
				payload: data,
			});
			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const createComments = (content: string, id: string) => {
	return async (dispatch: Dispatch<CommentsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await createComment(content, id);
			const { data } = response;
			dispatch({
				type: CommentsActionTypes.CREATE_COMMENT,
				comment: data,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};

export const updateComments = (content: string, id: string) => {
	return async (dispatch: Dispatch<CommentsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await updateComment(content, id);
			const { data } = response;
			console.log('priletelo>>>', data);
			dispatch({
				type: CommentsActionTypes.UPDATE_COMMENT,
				updateComm: data,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
export const deleteComments = (id: string) => {
	return async (dispatch: Dispatch<CommentsAction | AppAction>) => {
		try {
			dispatch(loaderOn());
			const response = await deleteComment(id);
			const { data } = response;
			console.log('priletelo>>>', data);
			dispatch({
				type: CommentsActionTypes.DELETE_COMMENT,
				removeComm: data,
			});

			dispatch(loaderOff());
		} catch (err: any) {
			console.log(err);
			dispatch(errorOn(err.response.data));
		}
	};
};
