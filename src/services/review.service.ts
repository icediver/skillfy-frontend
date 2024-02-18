import { axiosClassic, instance } from '@/api/api.interceptor';
import { getReviewsUrl } from '@/config/api.config';
import { IFullReview, IReview, IReviews } from '@/types/reviews.interface';

export const ReviewService = {
	async getAll() {
		const { data } = await axiosClassic.get<IReviews>(getReviewsUrl(``));

		return data;
	},

	async getByCourseId(id: string | number) {
		return instance.get<IReviews>(getReviewsUrl(`/by-course/${id}`));
	},

	async create(id: string | number, data: IReview) {
		return instance.post<IFullReview>(getReviewsUrl(`/leave/${id}`), data);
	},

	async delete(id: string | number) {
		return instance.delete(getReviewsUrl(`/${id}`));
	},
};
