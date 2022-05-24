import axios, { AxiosResponse } from 'axios';
import { IUserLogin, IUserRegistr, IUserDTO, IUser } from '../user/User.props';

const API_URL = 'http://192.168.1.150:4000';
const API_HOME_URL = 'http://192.168.0.100:4000';

export async function registration(user: IUserRegistr): Promise<AxiosResponse> {
	const { data } = await axios.post(`${API_URL}/register`, user);
	return data;
}

export async function autorization(user: IUserLogin): Promise<IUserDTO> {
	const { data } = await axios.post(`${API_URL}/login`, user);
	return data;
}

export async function getUsers() {
	const { data } = await axios.get(`${API_URL}/user`);
	return data;
}

export async function putUser(id: string | undefined, newUser: IUser) {
	const { data } = await axios.put(`${API_URL}/user/${id}`, newUser);
	return data;
}
