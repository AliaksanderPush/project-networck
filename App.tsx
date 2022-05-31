import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { RootScreensNav } from './components/nav/RootScreensNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { checkUser } from './redux/acshions/acshions.user';

const App = () => {
	useEffect(() => {
		const authControl = async () => {
			let data = await AsyncStorage.getItem('@auth');
			if (data) {
				console.log('data>>', data);
			}
		};
		authControl();
	}, []);

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<RootScreensNav />
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
