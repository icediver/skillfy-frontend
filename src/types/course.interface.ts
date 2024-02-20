import { IUserProfile } from './auth.interface';
import { ICategory } from './category.interface';
import { IFullReview } from './reviews.interface';
import { IVideo } from './video.interface';

export interface ICourse {
	id: number;
	title: string;
	slug: string;
	description: string;
	price: number;
	sale: number;
	images: string[];
	lessons: string[];
	createdAt: string;
	category: ICategory;
	videos: IVideo[];
	reviews: IFullReview[];
	views: number;
	teacher: IUserProfile;
	rating: number;
}

export interface ICourseDetails {
	course: ICourse;
	rating: number;
}
export type TypeCourses = { courses: ICourse[] };
export type TypePaginationCourses = { length: number; courses: ICourse[] };
