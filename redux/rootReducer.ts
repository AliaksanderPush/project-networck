import { combineReducers } from 'redux';
import { AppReducer } from './reducers/App.reducers';
import { CommentsReducer } from './reducers/Comments.reducer';
import { FriendsReducer } from './reducers/Friends.redusers';
import { MessagesReducer } from './reducers/Messages.reducer';
import { PostsReducer } from './reducers/Posts.reducer';
import { UserReducer } from './reducers/User.reducer';

export const rootReducer = combineReducers({
	user: UserReducer,
	posts: PostsReducer,
	comments: CommentsReducer,
	friends: FriendsReducer,
	messages: MessagesReducer,
	AppReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
