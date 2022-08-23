import { IPost } from '../../types/types';

export interface IAppState {
	loading: boolean;
	error: null | string;
}

export enum AppActionTypes {
	LOADER_DISPLAY_ON = ' LOADER_DISPLAY_ON,',
	LOADER_DISPLAY_OFF = 'LOADER_DISPLAY_OFF',
	ERROR_DISPLAY_OFF = 'ERROR_DISPLAY_OFF',
	ERROR_DISPLAY_ON = 'ERROR_DISPLAY_ON',
}

export interface ILoadONAction {
	type: AppActionTypes.LOADER_DISPLAY_ON;
}

export interface ILoadOFFAction {
	type: AppActionTypes.LOADER_DISPLAY_OFF;
}

export interface IErrorONAction {
	type: AppActionTypes.ERROR_DISPLAY_ON;
	payload: string;
}

export interface IErrorOFFAction {
	type: AppActionTypes.ERROR_DISPLAY_OFF;
	payload: null;
}

export type AppAction = ILoadONAction | IErrorONAction | IErrorOFFAction | ILoadOFFAction;
