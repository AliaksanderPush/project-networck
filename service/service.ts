import axios, { AxiosResponse } from 'axios';

const API_URL = 'http://192.168.1.150:4000';
const API_HOME_URL = 'http://192.168.0.104:4000';

export async function registration(
	name: string,
	email: string,
	password: string,
): Promise<AxiosResponse> {
	const response = await axios.post(`${API_HOME_URL}/register`, {
		name,
		email,
		password,
	});
	return response;
}

export async function autorization(email: string, password: string) {
	try {
		const { data } = await axios.post(`${API_URL}/login`, {
			email,
			password,
		});
		console.log('pri>>>', data);
		return data;
	} catch (error: any) {
		console.log(error.data);
	}
}

export async function getUsers() {
	try {
		const { data } = await axios.get(`${API_URL}/user`);
		return data;
	} catch (error) {
		console.error('err>>>', error);
	}
}
