import { AxiosResponse } from 'axios';
import { IFriend } from '../types/types';
import { api } from './auth-service';

export async function getFriendsAll(): Promise<AxiosResponse<IFriend[]>> {
	return await api.get<IFriend[]>(`/friend/getFriends`);
}

export async function addNewFriend(newFriendsId: string): Promise<AxiosResponse<IFriend>> {
	return await api.post<IFriend>(`/friend/${newFriendsId}`);
}

export async function removeFriend(id: string): Promise<AxiosResponse<IFriend>> {
	return await api.delete<IFriend>(`friend/remove/${id}`);
}
