import { AxiosResponse } from 'axios';
import { IFriend, IUser } from '../user/User.props';
import { api } from './auth-service';

export async function getFriendsAll(): Promise<AxiosResponse<IUser[]>> {
	return await api.get<IUser[]>(`/getFriends`);
}

export async function addNewFriend(newFriendsId: string): Promise<AxiosResponse<IUser>> {
	return await api.post<IUser>(`/friend/${newFriendsId}`);
}

export async function removeFriend(id: string): Promise<AxiosResponse<IUser>> {
	return await api.delete<IUser>(`friend/remove/${id}`);
}
