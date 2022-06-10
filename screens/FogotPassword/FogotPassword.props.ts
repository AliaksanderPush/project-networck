import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../components/nav/RootScreensNav.props';

export type PropsFogotPassword = NativeStackScreenProps<
	RootStackParams,
	'SignIn',
	'TabScreenStack'
>;
export interface IPropsEmail {
	email: string;
}
