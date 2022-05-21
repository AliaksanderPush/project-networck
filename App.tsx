import { SignUp } from './screens/SingUp/SingUp';
import { SignIn } from './screens/SingIn/SingIn';
import { Home } from './screens/Home';
import { Feed } from './screens/Feed/Feed';
import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account } from './screens/Account/Account';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export type RootStackParams = {
	SignUp: undefined;
	SignIn: undefined;
	Account:NavigatorScreenParams<ButtomStackParams>;
	
};

export type ButtomStackParams = {
	Home:undefined
	Feed:undefined

}


const Stack = createNativeStackNavigator<RootStackParams>();

export const AuthScreenStack = () => {
	return (
	  <Stack.Navigator initialRouteName='SignIn' screenOptions={{
		headerShown: false,
	  }}>
		<Stack.Screen
		  name="SignIn"
		  component={SignIn}
		/>
		<Stack.Screen name="SignUp" component={SignUp} />
		<Stack.Screen name="Account" component={ButtomStack} />
	  </Stack.Navigator>
	);
  };

  export const ButtomStack = createBottomTabNavigator<ButtomStackParams>()
  const TabScreenStack = () => {
    return (
       
	    <ButtomStack.Navigator  screenOptions={{ headerShown: false }}>
		   <ButtomStack.Screen name='Home' component={Home} />
	    	<ButtomStack.Screen name='Feed' component={Feed} />
     	</ButtomStack.Navigator>
		 
	)
  }





const App = () => {
	return (
		<Provider store={store}>
		 <SafeAreaProvider>
		 <NavigationContainer>
          <AuthScreenStack/ >
		 </NavigationContainer>
		 </SafeAreaProvider>
		</Provider>
	);
}

export default App;
