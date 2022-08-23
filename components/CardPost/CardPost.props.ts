import { IPost } from '../../types/types';

export interface ICardPost {
	post: IPost | null;
	id: string | undefined;
	hide: boolean;
}
