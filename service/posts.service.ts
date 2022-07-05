import axios, { AxiosResponse } from 'axios';
import { ICreatePost, ICreatePostDTO, IPost } from '../types/types';
import { api, API_URL } from './auth-service';

export async function getPostsAll(): Promise<AxiosResponse<IPost[]>> {
	return await axios.get<IPost[]>(`${API_URL}/posts/all`);
}

export async function createPost(data: ICreatePostDTO): Promise<AxiosResponse<IPost>> {
	return await api.post<IPost>(`/posts/message`, data);
}

export async function editPost(data: ICreatePostDTO, id: string): Promise<AxiosResponse<IPost>> {
	return await api.put<IPost>(`/posts/update/${id}`, data);
}

export async function viewPost(id: string): Promise<AxiosResponse<IPost>> {
	return await api.put<IPost>(`/posts/view-count/${id}`);
}

export async function removePost(id: string): Promise<AxiosResponse<IPost>> {
	return await api.delete<IPost>(`/posts/delete/${id}`);
}

export async function likePost(id: string): Promise<AxiosResponse<IPost>> {
	return await api.put<IPost>(`/posts/like`, { id });
}

export async function unlikePost(id: string): Promise<AxiosResponse<IPost>> {
	return await api.put<IPost>(`/posts/unlike`, { id });
}
