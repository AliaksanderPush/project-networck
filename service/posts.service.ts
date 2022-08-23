import axios, { AxiosResponse } from 'axios';
import { ICreatePostDTO, IPost } from '../user/User.props';
import { api, API_URL } from './auth-service';

export async function getPostsAll(): Promise<AxiosResponse<IPost[]>> {
	return await axios.get<IPost[]>(`${API_URL}/posts/all`);
}

export async function createPost(data: ICreatePostDTO): Promise<AxiosResponse<IPost>> {
	return await api.post<IPost>(`/posts/message`, data);
}
