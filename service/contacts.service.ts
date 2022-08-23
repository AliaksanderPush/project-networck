import axios, { AxiosResponse } from 'axios';
import { IFriend, IPost } from '../user/User.props';
import { api, API_URL } from './auth-service';

export async function getFriends(): Promise<AxiosResponse<IFriend[]>> {
	return await api.get<IFriend[]>(`/getFriends`);
}
