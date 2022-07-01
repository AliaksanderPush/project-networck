import axios, { AxiosResponse } from 'axios';
import { IUserLogin, IUserRegistr, IUserDTO, IUser } from '../user/User.props';
import { api, API_URL } from './auth-service';
import { FormDataProps } from '../screens/Account/Account.props';

export async function registration(user: IUserRegistr): Promise<AxiosResponse<IUserDTO>> {
	return await api.post<IUserDTO>('/auth/register', user);
}

export async function autorization(user: IUserLogin): Promise<AxiosResponse<IUserDTO>> {
	return await api.post<IUserDTO>('/auth/login', user);
}

export async function getRefreshToken(): Promise<AxiosResponse<IUserDTO>> {
	return await api.get<IUserDTO>('/auth/refresh');
}

export async function logoutSite(): Promise<void> {
	return api.post('/auth/logout');
}

export async function upLoadImage(base64: string) {
	const { data } = await api.post('/auth/upload-avatar', { image: base64 });
	return data;
}

export async function putUser(
	id: string | undefined,
	newUser: IUser,
): Promise<AxiosResponse<IUserDTO>> {
	return await api.put<IUserDTO>(`/user/${id}`, newUser);
}

export async function getUsers(): Promise<AxiosResponse<IUser[]>> {
	return await axios.get<IUser[]>(`${API_URL}/user`);
}

export async function upDatepass(pass: string): Promise<AxiosResponse<IUserDTO>> {
	return await api.post<IUserDTO>(`/auth/update-password`, { pass: pass });
}

export async function fogotPassword(email: string) {
	return await axios.post<string>(`${API_URL}/auth/fogot-password`, { email });
}

export async function upLoadFileImage(formData: FormDataProps): Promise<string> {
	const { data } = await api.post(`/upload`, formData, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'multipart/form-data',
		},
	});
	return data;
}
export async function putAvatar(path: string): Promise<AxiosResponse<string>> {
	return await api.post<string>(`/avatar`, { path });
}
