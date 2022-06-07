import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParams = {
	SignUp: undefined;
	SignIn: undefined;
	TabScreenStack: undefined;
};

export type ButtomStackParams = {
	Chat: undefined;
	Feed: undefined;
	AcountScreenStack: NavigatorScreenParams<AcccountStackParams>;
	Profile: NavigatorScreenParams<RootStackParams>;
};

export type DrawerStackParams = {
	Friends: undefined;
	Likes: undefined;
	TabScreenStack: undefined;
};

export type AcccountStackParams = {
	UpdatePassword: undefined;
	Account: undefined;
};
