import { IPost } from '../../user/User.props';

export interface ICardPost {
	post: IPost | null;
	id: string | undefined;
	hide: boolean;
}
