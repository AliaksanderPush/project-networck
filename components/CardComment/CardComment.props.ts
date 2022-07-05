import { IComment } from '../../types/types';

export interface ICardComment {
	comment: IComment;
	userId: string;
	role: string;
	postId: string;
	removeComment: (_id: string) => void;
}
