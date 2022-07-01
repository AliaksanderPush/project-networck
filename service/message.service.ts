import { AxiosResponse } from 'axios';
import { FormDataProps } from '../screens/Account/Account.props';
import { IMessage } from '../user/User.props';
import { api } from './auth-service';

export async function getMessageAll(id: string): Promise<AxiosResponse<IMessage[]>> {
	return await api.get<IMessage[]>(`/message/getMessages/${id}`);
}

export async function addNewMessage(
	id: string,
	content: string,
	image?: string | FormDataProps,
): Promise<AxiosResponse<IMessage>> {
	return await api.post<IMessage>(`/message/addMessage/${id}`, { content, image });
}

export async function removeMessage(
	id: string,
	friendId: string,
): Promise<AxiosResponse<IMessage>> {
	return await api.delete<IMessage>(`message/remove/${id}`, { data: { friendRoomId: friendId } });
}
export async function upDateMessage(id: string, content: string): Promise<AxiosResponse<IMessage>> {
	return await api.delete<IMessage>(`message/update/${id}`, { data: { content } });
}
