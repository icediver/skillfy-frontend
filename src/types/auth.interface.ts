import { ICourse } from './course.interface';

export interface IUser {
	id: number;
	name: string;
	email: string;
}

export interface IUserProfile extends IUser {
	avatarPath?: string;
	isAdmin: boolean;
	isEmailVerified: boolean;
	favorites: ICourse[];
	purchases: ICourse[];
}
