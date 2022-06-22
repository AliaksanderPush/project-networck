import { IComment } from '../../user/User.props';

export interface ICommentState {
	comments: IComment[];
}

export enum CommentsActionTypes {
	LOAD_COMMENTS = 'LOAD_COMMENTS',
	CREATE_COMMENT = 'CREATE_COMMENT',
	UPDATE_COMMENT = 'UPDATE_COMMENT',
	DELETE_COMMENT = 'DELETE_COMMENT',
}

interface ILoadCommentsAction {
	type: CommentsActionTypes.LOAD_COMMENTS;
	payload: IComment[];
}

interface ICreateCommentsAction {
	type: CommentsActionTypes.CREATE_COMMENT;
	comment: IComment;
}
interface IUpdateCommentsAction {
	type: CommentsActionTypes.UPDATE_COMMENT;
	updateComm: IComment;
}
interface IRemoveCommentsAction {
	type: CommentsActionTypes.DELETE_COMMENT;
	removeComm: string;
}

export type CommentsAction =
	| ILoadCommentsAction
	| ICreateCommentsAction
	| IUpdateCommentsAction
	| IRemoveCommentsAction;
