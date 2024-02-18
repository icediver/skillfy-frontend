import { axiosClassic, instance } from '@/api/api.interceptor';
import { TypeCourseData, TypeCoursesDataFilters } from './course.types';
import {
	ICourse,
	ICourseDetails,
	TypePaginationCourses,
} from '@/types/course.interface';
import { getCoursesUrl } from '@/config/api.config';

export const CourseService = {
	async getAll(queryData = {} as TypeCoursesDataFilters) {
		const { data } = await axiosClassic.get<TypePaginationCourses>(
			getCoursesUrl(``),
			{ params: queryData }
		);

		return data;
	},

	async getSimilar(id: string | number) {
		const { data } = await axiosClassic.get<TypePaginationCourses>(
			getCoursesUrl(`/similar/${id}`)
		);
		return data;
	},

	async getBySlug(slug: string) {
		const { data } = await axiosClassic.get<ICourseDetails>(
			getCoursesUrl(`/by-slug/${slug}`)
		);
		return data;
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic.get<ICourse[]>(
			getCoursesUrl(`/by-category/${categorySlug}`)
		);
	},

	async getById(id: string | number) {
		return instance.get<ICourse>(getCoursesUrl(`/${id}`));
	},

	//--------------------Create------------------------//

	async create() {
		return instance.post<ICourse>(getCoursesUrl(``));
	},

	//--------------------Update------------------------//

	async update(id: string | number, data: TypeCourseData) {
		return instance.put<ICourse>(getCoursesUrl(`/${id}`), data);
	},

	async updateViews(id: string | number) {
		return instance.patch<ICourse>(getCoursesUrl(`/update-views/${id}`));
	},
	//--------------------Delete------------------------//

	async delete(id: string | number) {
		return instance.delete<ICourse>(getCoursesUrl(`/${id}`));
	},
};
