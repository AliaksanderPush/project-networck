import React, { useState } from 'react';
import { AuthProps } from './AuthProvider.props';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../../service/auth-service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { IUserTokens } from '../../user/User.props';
import { fetchPosts } from '../../redux/acshions/acshions.post';
import { useDispatch } from 'react-redux';

const AuthProvider = ({ children }: AuthProps): JSX.Element => {
	const [auth, setAuth] = useState<string | null>('');
	const { checkUser } = useActions();
	const dispatch = useDispatch();
	const { tokens } = useTypedSelector((state) => state.user);
	const { posts } = useTypedSelector((state) => state.posts);

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
					console.log('token>>', data);
					AsyncStorage.setItem('@auth', JSON.stringify(data.token));
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
			console.log('it wokck!');
		} else {
			setAuth(tokens.refreshToken);
		}
	}, [tokens]);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	return <SafeAreaProvider>{children}</SafeAreaProvider>;
};

export default React.memo(AuthProvider);
