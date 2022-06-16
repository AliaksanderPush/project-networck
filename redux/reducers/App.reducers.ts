import { AppAction, AppActionTypes } from '../types/app.types';

const initialState = {
	loading: false,
	error: false,
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
				error: true,
			};
		case AppActionTypes.ERROR_DISPLAY_OFF:
			return {
				...state,
				error: false,
			};

		default:
			return state;
	}
};
