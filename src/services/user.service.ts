import { instance } from '@/api/api.interceptor';
import { getUsersUrl } from '@/config/api.config';
import { IUser, IUserProfile } from '@/types/auth.interface';
import { ICourse } from '@/types/course.interface';

type TypeData = {
	email: string;
	password?: string;
	name?: string;
	avatarPath?: string;
};

export const UserService = {
	async getProfile() {
		const profile = await instance.get<IUserProfile>(getUsersUrl(`/profile`));

		return profile;
	},

	async updateProfile(data: TypeData) {
		return instance.put<IUserProfile>(getUsersUrl(`/profile`), data);
	},
	async toggleFavorite(courseId: string | number) {
		return instance.patch<IUser>(getUsersUrl(`/favorites/${courseId}`));
	},
	async buyCourses(coursesIds: number[]) {
		return instance<IUser>({
			url: getUsersUrl(`/buy-courses`),
			method: 'PATCH',
			data: { coursesIds },
		});
	},
};
