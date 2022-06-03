import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ButtomStackParams } from '../../components/nav/RootScreensNav.props';
import { RootStackParams } from '../../components/nav/RootScreensNav.props';
import { CompositeNavigationProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StackNavigationProp } from '@react-navigation/stack';

export type PropsAccount = NativeStackScreenProps<ButtomStackParams, 'Account'>;

export type PropsScreen = NativeStackScreenProps<
	RootStackParams,
	'UpdatePassword',
	'TabScreenStack'
>;

export type HomeScreenProp = CompositeNavigationProp<
	StackNavigationProp<RootStackParams, 'UpdatePassword'>,
	BottomTabNavigationProp<ButtomStackParams, 'Account'>
>;
