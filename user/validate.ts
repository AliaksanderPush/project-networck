export const loginValidate = {
	required: 'Enter your login',
	validate: (value:string) => {
		if (!value.match(/^[a-zA-Z](.[a-zA-Z0-9_-]*)$/)) {
			return 'Enter in Latin letters';
		} else if (value.length > 5) {
			return 'The login is too long';
		}
		return true;
	},
};

export const passwordValidate = {
	required: 'Enter your password',
	validate: (value:string) => {
		if (!value.match(/^[a-zA-Z0-9]{3,20}$/)) {
			return 'The password must contain Latin + digits!';
		} else if (value.length > 20) {
			return 'The password is too long';
		}
		return true;
	},
};

export const emailValidate = {
	required: 'Enter your email',
	validate: (value:string) => {
		if (!value.match(/^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/)) {
			return "Sorry, we don't recognize this email";
		} else if (value.length > 20) {
			return 'The email is too long';
		}
		return true;
	},
};