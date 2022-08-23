import {
	IErrorONAction,
	AppActionTypes,
	IErrorOFFAction,
	ILoadOFFAction,
	ILoadONAction,
} from '../types/app.types';

export function loaderOn(): ILoadONAction {
	return {
		type: AppActionTypes.LOADER_DISPLAY_ON,
	};
}

export function loaderOff(): ILoadOFFAction {
	return {
		type: AppActionTypes.LOADER_DISPLAY_OFF,
	};
}

export function errorOff(): IErrorOFFAction {
	return {
		type: AppActionTypes.ERROR_DISPLAY_OFF,
		payload: null,
	};
}
export function errorOn(err: string): IErrorONAction {
	return {
		type: AppActionTypes.ERROR_DISPLAY_ON,
		payload: err,
	};
}
