import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../nav/RootScreensNav.props';

export type HeaderTabsProps = NativeStackScreenProps<RootStackParams, 'SignIn', 'SignUp'>;
