import 'react-native-gesture-handler';
import React from 'react';
import { RootScreensNav } from './components/nav/RootScreensNav';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './components/AuthProvider/AuthProvider';

const App = () => {
	return (
		<AuthProvider>
			<SafeAreaProvider>
				<RootScreensNav />
			</SafeAreaProvider>
		</AuthProvider>
	);
};

export default App;
