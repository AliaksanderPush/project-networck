import { FormDataProps } from '../screens/Account/Account.props';
export interface IUserRegistr {
	name: string;
	email: string;
	password: string;
	gender: string;
	city: string;
	age: number;
}

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserValidate {
	login: string;
	email: string;
	password: string;
	city: string;
	age: string;
}

export interface IUser {
	_id?: string;
	age: number;
	city: string;
	email: string;
	gender: string;
	name: string;
	password: string | undefined;
	avatar: string;
	roles: string[];
	contacts: IFriend[] | string[];
	created_at?: Date;
	posts?: IPost[];
}

export interface IUserTokens {
	accesToken: string;
	refreshToken: string;
}

export interface IUserDTO {
	token: IUserTokens;
	searchUser: IUser;
}

export interface IPost {
	_id: string;
	title: string;
	slug: string;
	content: string;
	comments: string[];
	featuredImage: string;
	published?: boolean;
	likes: string[];
	views: number;
	postedBy: IUser;
	createdAt: Date;
	updatedAt: Date;
}

export interface ICreatePost {
	title: string;
	content: string;
	image: FormDataProps | string;
}
export interface ICreatePostDTO {
	title: string;
	content: string;
	featuredImage: string;
	imgFormData?: boolean;
}

export interface IMedia {
	url: string;
	public_id: string;
	postedBy: IUser;
	timestamps: Date;
}

export interface IFriend {
	dialog: IDialog;
	userId: IUser;
}

export interface IDialog {
	partner: IUser | string;
	author: IUser | string;
	messages: IMessage[];
	lastMessage: IMessage | string;
}

export interface IMessage {
	text: string;
	dialog: IDialog | string;
	read: boolean;
}

export interface IComment {
	_id: string;
	content: string;
	postedBy: IUser;
	postId: string;
	createdAt: Date;
	updatedAt: Date;
}
