import { AxiosResponse } from 'axios';
import { IMessage } from '../user/User.props';
import { api } from './auth-service';

export async function getMessageAll(id: string): Promise<AxiosResponse<IMessage[]>> {
	return await api.get<IMessage[]>(`/message/getMessages/${id}`);
}

export async function addNewMessage(id: string, content: string): Promise<AxiosResponse<IMessage>> {
	return await api.post<IMessage>(`/message/addMessage/${id}`, { content });
}

export async function removeMessage(id: string): Promise<AxiosResponse<IMessage>> {
	return await api.delete<IMessage>(`message/remove/${id}`);
}
export async function upDateMessage(id: string, content: string): Promise<AxiosResponse<IMessage>> {
	return await api.delete<IMessage>(`message/update/${id}`, { data: { content } });
}
