import { SignUp } from './screens/SingUp';
import { SignIn } from './screens/SingIn';
import { HomeScreen } from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './screens/Splash';
import { Account } from './screens/Account';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='SignIn' screenOptions={{ headerShown: false }}>
				<Stack.Screen name='SignUp' component={SignUp} />
				<Stack.Screen name='Account' component={Account} />
				<Stack.Screen name='SignIn' component={SignIn} />
				<Stack.Screen name='HomeScreen' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
