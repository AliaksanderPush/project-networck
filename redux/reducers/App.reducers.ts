import { AppAction, AppActionTypes } from '../types/app.types';

const initialState = {
	loading: false,
	error: null,
};

export const AppReducer = (state = initialState, action: AppAction) => {
	switch (action.type) {
		case AppActionTypes.LOADER_DISPLAY_ON:
			return {
				...state,
				loading: true,
			};
		case AppActionTypes.LOADER_DISPLAY_OFF:
			return {
				...state,
				loading: false,
			};
		case AppActionTypes.ERROR_DISPLAY_ON:
			return {
				...state,
				error: action.payload,
			};
		case AppActionTypes.ERROR_DISPLAY_OFF:
			return {
				...state,
				error: null,
			};

		default:
			return state;
	}
};
