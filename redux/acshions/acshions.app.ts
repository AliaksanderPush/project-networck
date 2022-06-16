import { AppAction, AppActionTypes } from '../types/app.types';

export function loaderOn(): AppAction {
	return {
		type: AppActionTypes.LOADER_DISPLAY_ON,
	};
}

export function loaderOff() {
	return {
		type: AppActionTypes.LOADER_DISPLAY_OFF,
	};
}

export function errorOff() {
	return {
		type: AppActionTypes.ERROR_DISPLAY_OFF,
		payload: null,
	};
}
export function errorOn(err: string): AppAction {
	return {
		type: AppActionTypes.ERROR_DISPLAY_ON,
		payload: err,
	};
}
