import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../components/nav/RootScreensNav.props';

export type PropsSingUp = NativeStackScreenProps<RootStackParams, 'SignIn', 'TabScreenStack'>;

/*
type RootStackParamList = {
	SignIn: undefined;
	Account: undefined;

	PdpComments: { slug: string };
	Sellers: { data: Array<string> };
	Favorites: undefined;
};

*/
