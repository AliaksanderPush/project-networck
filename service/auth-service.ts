import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from './service';
import { useTypedSelector } from '../redux/customReduxHooks/useTypedSelector';
import { useActions } from '../redux/customReduxHooks/useAcshion';

const { logOut } = useActions();

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${AsyncStorage.getItem('@auth')}`;

axios.interceptors.response.use(
	async function (responce) {
		return responce;
	},
	async function (error) {
		let res = error.responce;
		if (res.startus === 401 && res.config && !res.config._isRetryRequest) {
			await AsyncStorage.removeItem('@auth');
			logOut();
		}
	},
);
