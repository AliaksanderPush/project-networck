import { SignUp } from './screens/SingUp/SingUp';
import { SignIn } from './screens/SingIn/SingIn';
import { Home } from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Account } from './screens/Account/Account';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export type RootStackParams = {
	SignUp: undefined;
	SignIn: undefined;
	Account: undefined;
	Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
					<Stack.Screen name='SignUp' component={SignUp} />
					<Stack.Screen name='Account' component={Account} />
					<Stack.Screen name='SignIn' component={SignIn} />
					<Stack.Screen name='Home' component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}

export default App;
