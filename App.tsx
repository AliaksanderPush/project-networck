import 'react-native-gesture-handler';
import React from 'react';
import { RootScreensNav } from './components/nav/RootScreensNav';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AuthProvider } from './components/AuthProvider/AuthProvider';

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
