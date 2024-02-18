import { IUserProfile } from './auth.interface';

export interface IReviews {
	user: IUserProfile;
	reviews: IFullReview[];
	length: number;
	averageRating: number;
}

export interface IReview {
	text: string;
	rating: number;
}

export interface IFullReview extends IReview {
	id: number;
	createdAt: number;
	user: IUserProfile;
}
