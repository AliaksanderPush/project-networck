import axios, { AxiosResponse } from 'axios';
import { IUserLogin, IUserRegistr, IUserDTO, IUser } from '../user/User.props';
import { api, API_URL } from './auth-service';

export async function registration(user: IUserRegistr): Promise<AxiosResponse<IUserDTO>> {
	return await api.post<IUserDTO>('/register', user);
}

export async function autorization(user: IUserLogin): Promise<AxiosResponse<IUserDTO>> {
	return await api.post<IUserDTO>('/login', user);
}

export async function getRefreshToken(): Promise<AxiosResponse<IUserDTO>> {
	return await api.get<IUserDTO>('/refresh');
}

export async function logoutSite(): Promise<void> {
	return api.post('/logout');
}

export async function upLoadImage(base64: string, token: string | undefined) {
	if (!token) {
		token = '';
	}
	const { data } = await api.post('/upload-avatar', { image: base64 });
	return data;
}

export async function putUser(
	id: string | undefined,
	newUser: IUser,
): Promise<AxiosResponse<IUserDTO>> {
	const { data } = await api.put<AxiosResponse>('/user/${id}', newUser);
	return data;
}

export async function getUsers(): Promise<AxiosResponse<IUserDTO[]>> {
	const { data } = await axios.get<AxiosResponse>(`${API_URL}/user`);
	return data;
}
