import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from './service';

export const $api = axios.create({
	baseURL: API_URL,
});

$api.interceptors.request.use(async (config: AxiosRequestConfig) => {
	config.headers!.Authorization = `Bearer ${await AsyncStorage.getItem('@auth')}`;

	return config;
});

$api.interceptors.request.use(
	(config) => {
		return config;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error.responce.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				const response = await axios.get(`${API_URL}/refresh`, {
					withCredentials: true,
				});
				localStorage.setItem('token', response.data.accessToken);
				return $api.request(originalRequest);
			} catch (err) {
				console.log('no registration!');
			}
		}
	},
);
