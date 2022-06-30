import * as UserActionCreators from './acshions.user';
import * as PostActionCreators from './acshions.post';
import * as CommentsActionCreators from './acshions.comments';
import * as FriendsActionCreators from './acshions.friends';
import * as MessageActionCreators from './acshions.messages';

export const userActionCreators = {
	...UserActionCreators,
	...PostActionCreators,
	...CommentsActionCreators,
	...FriendsActionCreators,
	...MessageActionCreators,
};
