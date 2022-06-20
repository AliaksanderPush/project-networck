import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParams = {
	SignUp: undefined;
	SignIn: undefined;
	FogotPassword: undefined;
	TabScreenStack: undefined;
};

export type ButtomStackParams = {
	Feed: undefined;
	Post: undefined;
	ChatRoomScreenStack: NavigatorScreenParams<ChatRoomStackParams>;
	AcountScreenStack: NavigatorScreenParams<AcccountStackParams>;
	Profile: NavigatorScreenParams<RootStackParams>;
};

export type DrawerStackParams = {
	People: undefined;
	Likes: undefined;
	TabScreenStack: undefined;
};

export type AcccountStackParams = {
	UpdateProfile: undefined;
	MyPost: { id: string };
	Account: undefined;
};

export type ChatRoomStackParams = {
	Friends: undefined;
	ChatRoom: {
		id: string;
	};
};
