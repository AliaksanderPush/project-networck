import React, { FC, useEffect } from 'react';
import { AuthProviderProps } from './AuthProvider.props';
import axios, { AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useActions } from '../../redux/customReduxHooks/useAcshion';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { useTypedSelector } from '../../redux/customReduxHooks/useTypedSelector';
import { API_URL } from '../../service/service';

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const { checkUser } = useActions();
	const { user } = useTypedSelector((state) => state.user);

	let token = user?.token || '';
	axios.defaults.baseURL = API_URL;
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

	useEffect(() => {
		const authControl = async () => {
			let data = await AsyncStorage.getItem('@auth');
			if (data) {
				checkUser();
			}
		};
		authControl();
	}, []);

	return <Provider store={store}>{children}</Provider>;
};
