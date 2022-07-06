import React, { ReactNode, useState } from 'react';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api, API_URL } from '../../service/auth-service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { IUserTokens } from '../../types/types';
import { fetchPosts } from '../../redux/acshions/acshions.post';
import { useDispatch } from 'react-redux';
import io from 'socket.io-client';
import { fetchFriends } from '../../redux/acshions/acshions.friends';

const AuthProvider = ({ children }: { children: ReactNode }): JSX.Element => {
	const [auth, setAuth] = useState<string | null>('');
	const { checkUser, loadSocket } = useActions();
	const dispatch = useDispatch();
	const { tokens } = useTypedSelector((state) => state.user);

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
					const { data } = await api.get(`/auth/refresh`);
					AsyncStorage.setItem('@auth', JSON.stringify(data.token));
					return api.request(originalRequest);
				} catch (e) {
					alert('no registration!');
				}
			}
		},
	);
	useEffect(() => {
		const sockets = io(API_URL, {
			transports: ['websocket'],
		});
		sockets.connect();
		loadSocket(sockets);
		console.log('socket is Load!!!!!!!!!!');
	}, []);

	useEffect(() => {
		const authControl = async () => {
			let data = await AsyncStorage.getItem('@auth');
			if (data) {
				const token = JSON.parse(data) as IUserTokens;
				if (token.accesToken) {
					setAuth(token.refreshToken);
					checkUser();
				}
			} else {
				setAuth('');
			}
		};
		authControl();
	}, []);

	useEffect(() => {
		if (!tokens) {
			setAuth('');
		} else {
			setAuth(tokens.refreshToken);
		}
	}, [tokens]);

	useEffect(() => {
		dispatch(fetchPosts());
	}, []);

	return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default React.memo(AuthProvider);
