import { IComment } from '../../user/User.props';

export interface ICardComment {
	comment: IComment;
	userId: string;
	role: string;
	postId: string;
	removeComment: (_id: string) => void;
}
