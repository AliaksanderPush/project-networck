import axios, { AxiosResponse } from 'axios';
import { IPost } from '../user/User.props';
import { api, API_URL } from './auth-service';

export async function getPostsAll(): Promise<AxiosResponse<IPost[]>> {
	return await axios.get<IPost[]>(`${API_URL}/chat/posts22`);
}
