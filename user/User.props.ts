export interface IUserRegistr {
	login: string;
	email: string;
	password: string;
	checked?: boolean;
	isEnabled?: boolean;

	city: string;
}

export interface IUserLogin {
	email: string;
	password: string;
}
