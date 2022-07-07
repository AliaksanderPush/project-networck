import axios from 'axios';

export const API_URL = 'http://192.168.0.107:4000';
export const API_URL1 = 'http://192.168.1.150:4000';
export const API_HOME_URL = 'http://192.168.0.144:4000';

export const api = axios.create({
	baseURL: API_URL,
});
