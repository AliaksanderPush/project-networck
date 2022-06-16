import * as UserActionCreators from './acshions.user';
import * as PostActionCreators from './acshions.post';

export const userActionCreators = { ...UserActionCreators, ...PostActionCreators };
