import { combineReducers } from 'redux';
import { AppReducer } from './reducers/App.reducers';
import { PostsReducer } from './reducers/Posts.reducer';
import { UserReducer } from './reducers/User.reducer';

export const rootReducer = combineReducers({
	user: UserReducer,
	posts: PostsReducer,
	AppReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
