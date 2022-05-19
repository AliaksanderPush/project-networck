import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActionCreators } from '../acshions/index';

export const useActions = () => {
	const dispatch = useDispatch();
	return bindActionCreators(userActionCreators, dispatch);
};
