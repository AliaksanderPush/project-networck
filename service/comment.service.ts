import axios, { AxiosResponse } from 'axios';
import { IComment } from '../user/User.props';
import { api, API_URL } from './auth-service';

export async function getCommentsAll(): Promise<AxiosResponse<IComment[]>> {
	return await axios.get<IComment[]>(`${API_URL}/commit/commits`);
}

export async function createComment(content: string, id: string): Promise<AxiosResponse<IComment>> {
	return await api.post<IComment>(`/commit/${id}`, { content });
}

export async function deleteComment(id: string, _id: string): Promise<AxiosResponse<IComment>> {
	return await api.delete<IComment>(`/commit/delete/${id}`, { data: { postId: _id } });
}
