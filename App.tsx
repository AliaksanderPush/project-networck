import 'react-native-gesture-handler';
import React from 'react';
import { RootScreensNav } from './components/nav/RootScreensNav';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<RootScreensNav />
			</SafeAreaProvider>
		</Provider>
	);
};

export default App;
