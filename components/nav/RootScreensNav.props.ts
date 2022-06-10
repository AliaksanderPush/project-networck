import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParams = {
	SignUp: undefined;
	SignIn: undefined;
	FogotPassword: undefined;
	TabScreenStack: undefined;
};

export type ButtomStackParams = {
	Chat: undefined;
	ChatRoomScreenStack: NavigatorScreenParams<ChatRoomStackParams>;
	AcountScreenStack: NavigatorScreenParams<AcccountStackParams>;
	Profile: NavigatorScreenParams<RootStackParams>;
};

export type DrawerStackParams = {
	Posts: undefined;
	Likes: undefined;
	TabScreenStack: undefined;
};

export type AcccountStackParams = {
	UpdatePassword: undefined;
	Account: undefined;
};

export type ChatRoomStackParams = {
	Friends: undefined;
	ChatRoom: {
		id: string;
	};
};
