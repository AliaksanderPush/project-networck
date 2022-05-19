import { combineReducers } from 'redux';
import { UserReducer } from './reducers/User.reducer';

export const rootReducer = combineReducers({
	user: UserReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
