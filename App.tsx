import { SignUp } from './screens/SingUp';
import { SignIn } from './screens/SingIn';
import { HomeScreen } from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from './screens/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
			    <Stack.Screen name='Splash' component={Splash} />
				<Stack.Screen name='SignUp' component={SignUp} />
				<Stack.Screen name='SignIn' component={SignIn} />
       	<Stack.Screen name='HomeScreen' component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}