import { IPost } from '../../user/User.props';

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

interface ILoadONAction {
	type: AppActionTypes.LOADER_DISPLAY_ON;
}

interface ILoadOFFAction {
	type: AppActionTypes.LOADER_DISPLAY_OFF;
}

interface IErrorONPostsAction {
	type: AppActionTypes.ERROR_DISPLAY_ON;
	payload: string;
}

interface IErrorOFFPostsAction {
	type: AppActionTypes.ERROR_DISPLAY_OFF;
	payload: null;
}

export type AppAction = ILoadONAction | IErrorONPostsAction | IErrorOFFPostsAction | ILoadOFFAction;
