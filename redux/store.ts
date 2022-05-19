import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const composeEnhancer = (window as any)._REDUX_DEVTOOLS_EXTENSION_COMOSE_ || compose;
export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
