import * as UserActionCreators from './acshions.user';
import * as PostActionCreators from './acshions.post';
import * as CommentsActionCreators from './acshions.comments';
import * as FriendsActionCreators from './acshions.friends';

export const userActionCreators = {
	...UserActionCreators,
	...PostActionCreators,
	...CommentsActionCreators,
	...FriendsActionCreators,
};
