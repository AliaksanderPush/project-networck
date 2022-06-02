import axios, { AxiosResponse } from 'axios';
import { IUserLogin, IUserRegistr, IUserDTO, IUser } from '../user/User.props';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_URL = 'http://192.168.0.144:4000';
export const API_URL1 = 'http://192.168.1.150:4000';
export const API_HOME_URL = 'http://192.168.0.144:4000';

const token = async () => await AsyncStorage.getItem('@auth');

const api = axios.create({
	baseURL: API_URL,
});

api.defaults.headers.common['Authorization'] = '';

axios.interceptors.request.use(
	(config) => {
		return config;
	},

	async (error) => {
		const originalRequest = error.config;
		if (error.responce.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				const { data } = await api.get(`/refresh`);
				AsyncStorage.setItem('@auth', data.accessToken);
				return api.request(originalRequest);
			} catch (e) {
				alert('no registration!');
			}
		}
	},
);

export async function registration(user: IUserRegistr): Promise<AxiosResponse<IUserDTO>> {
	return await axios.post<IUserDTO>('/register', user);
}

export async function autorization(user: IUserLogin): Promise<AxiosResponse<IUserDTO>> {
	return await api.post<IUserDTO>('/login', user);
}

export async function getRefreshToken(): Promise<AxiosResponse<IUserDTO>> {
	return await axios.get<IUserDTO>('/refresh');
}

export async function logoutSite(): Promise<void> {
	return axios.post('/logout');
}

export async function upLoadImage(base64: string, token: string | undefined) {
	if (!token) {
		token = '';
	}
	const { data } = await axios.post('/upload-avatar', { image: base64 });
	return data;
}

export async function putUser(
	id: string | undefined,
	newUser: IUser,
): Promise<AxiosResponse<IUserDTO>> {
	const { data } = await axios.put<AxiosResponse>('/user/${id}', newUser);
	return data;
}

export async function getUsers(): Promise<AxiosResponse<IUserDTO[]>> {
	const { data } = await axios.get<AxiosResponse>(`${API_URL}/user`);
	return data;
}
