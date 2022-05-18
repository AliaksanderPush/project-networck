import { IUserRegistr } from '../../user/User.props';

export interface IModalWindow {
	data: IUserRegistr | null;
	toggeShowModal: () => void;
}
