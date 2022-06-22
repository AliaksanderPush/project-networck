import axios, { AxiosResponse } from 'axios';
import { IComment } from '../user/User.props';
import { api, API_URL } from './auth-service';

export async function getCommentsAll(): Promise<AxiosResponse<IComment[]>> {
	return await axios.get<IComment[]>(`${API_URL}/commit/commits`);
}

export async function createComment(content: string, id: string): Promise<AxiosResponse<IComment>> {
	return await api.post<IComment>(`/commit/${id}`, { content });
}

export async function updateComment(content: string, id: string): Promise<AxiosResponse<IComment>> {
	return await api.post<IComment>(`/commit/update/${id}`, { content });
}

export async function deleteComment(id: string): Promise<AxiosResponse<IComment>> {
	return await api.post<IComment>(`/commit/delete/${id}`);
}
