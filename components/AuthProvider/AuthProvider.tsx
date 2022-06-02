import React, { useState } from 'react';
import { AuthProps } from './AuthProvider.props';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../service/auth-service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useActions } from '../../redux/customReduxHooks/useAcshion';

export const AuthProvider = ({ children }: AuthProps): JSX.Element => {
	const [auth, setAuth] = useState<string | null>('');
	const { logOut, checkUser } = useActions();
	const { user, error, loading } = useTypedSelector((state) => state.user);

	if (error) {
		alert(error);
	}
	api.defaults.headers.common['Authorization'] = auth ? `Bearer ${auth}` : '';
	api.interceptors.request.use(
		(config) => {
			return config;
		},

		async (error) => {
			const originalRequest = error.config;
			if (error.responce.status === 401 && error.config && !error.config._isRetry) {
				originalRequest._isRetry = true;
				try {
					const { data } = await api.get(`/refresh`);
					AsyncStorage.setItem('@auth', data.token.refreshToken);
					return api.request(originalRequest);
				} catch (e) {
					alert('no registration!');
				}
			}
		},
	);

	useEffect(() => {
		const authControl = async () => {
			let data = await AsyncStorage.getItem('@auth');
			if (data) {
				const token = JSON.parse(data);
				setAuth(token);
				checkUser();
				setAuth('');
			} else {
				console.log('stora is empty!');
				setAuth('');
			}
		};
		authControl();
	}, []);

	return <SafeAreaProvider>{children}</SafeAreaProvider>;
};
