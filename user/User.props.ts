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
	avatar?: string | undefined;
	roles?: string[];
}

export interface IUserDTO {
	token: string;
	searchUser: IUser;
}
