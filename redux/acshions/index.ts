import * as UserActionCreators from './acshions.user';
import * as PostActionCreators from './acshions.post';
import * as CommentsActionCreators from './acshions.comments';

export const userActionCreators = {
	...UserActionCreators,
	...PostActionCreators,
	...CommentsActionCreators,
};
