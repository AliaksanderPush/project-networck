import axios, { AxiosResponse } from 'axios';
import { useTypedSelector } from '../redux/customReduxHooks/useTypedSelector';
import { IUserLogin, IUserRegistr, IUserDTO, IUser } from '../user/User.props';

export const API_URL = 'http://192.168.1.150:4000';
export const API_HOME_URL = 'http://192.168.0.144:4000';

export async function registration(user: IUserRegistr): Promise<AxiosResponse> {
	const { data } = await axios.post(`${API_URL}/register`, user);
	return data;
}

export async function autorization(user: IUserLogin): Promise<IUserDTO> {
	const { data } = await axios.post(`${API_URL}/login`, user);
	return data;
}

export async function getUsers(): Promise<IUserDTO[]> {
	const { data } = await axios.get(`${API_URL}/user`);
	return data;
}

export async function getRefreshToken(): Promise<string> {
	const { data } = await axios.get(`${API_URL}/refresh`);
	return data;
}

export async function putUser(id: string | undefined, newUser: IUser): Promise<IUserDTO> {
	const { data } = await axios.put(`${API_URL}/user/${id}`, newUser);
	return data;
}

export async function upLoadImage(base64: string, token: string | undefined) {
	if (!token) {
		token = '';
	}
	const { data } = await axios.post(
		`${API_URL}/upload-avatar`,
		{ image: base64 },
		{ headers: { Authorization: `Bearer ${token}` } },
	);

	return data;
}
