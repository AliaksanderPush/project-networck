import 'react-native-gesture-handler';
import React from 'react';
import { RootScreensNav } from './components/nav/RootScreensNav';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AuthProvider from './components/AuthProvider/AuthProvider';
import { io } from 'socket.io-client';
import { API_URL } from './service/auth-service';

const socket = io(API_URL, { path: './socket.io', reconnection: false });
//console.log('socket>>>', socket);
const App = () => {
	return (
		<Provider store={store}>
			<AuthProvider>
				<RootScreensNav />
			</AuthProvider>
		</Provider>
	);
};

export default App;
