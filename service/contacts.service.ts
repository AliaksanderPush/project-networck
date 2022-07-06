import { AxiosResponse } from 'axios';
import { IFriend } from '../types/types';
import { api } from './auth-service';

export async function getFriends(): Promise<AxiosResponse<IFriend[]>> {
	return await api.get<IFriend[]>(`/getFriends`);
}
