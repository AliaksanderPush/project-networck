import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_URL = 'http://192.168.0.144:4000';
export const API_URL1 = 'http://192.168.1.150:4000';
export const API_HOME_URL = 'http://192.168.0.144:4000';

export const api = axios.create({
	baseURL: API_URL,
});

/*
axios.interceptors.request.use((config: AxiosRequestConfig) => {
	config.headers!.Authorization = `Bearer ${AsyncStorage.getItem('@auth')}`;
	return config;
});
*/
api.defaults.headers.common['Authorization'] = `Bearer ${AsyncStorage.getItem('@auth')}`;

api.interceptors.request.use(
	(config) => {
		return config;
	},

	async (error) => {
		const originalRequest = error.config;
		if (error.responce.status === 401 && error.config && !error.config._isRetry) {
			originalRequest._isRetry = true;
			try {
				const { data } = await axios.get(`${API_URL}/refresh`);
				AsyncStorage.setItem('@auth', data.accessToken);
				return axios.request(originalRequest);
			} catch (e) {
				alert('no registration!');
			}
		}
	},
);
