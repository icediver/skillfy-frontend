import { FaStar } from 'react-icons/fa6';
import { ITabsElement } from '../data';
import clsx from 'clsx';
import { RatingStars } from './rating-stars/RatingStars';
import { nanoid } from 'nanoid';
import { ReviewTabItem } from './rating-stars/review-tab-item/ReviewTabItem';

export function ReviewsTab({ course, rating }: ITabsElement) {
	return (
		<div className="overflow-hidden rounded-lg bg-main-background p-8 duration-700 animate-in fade-in">
			<h2 className="pt-0">Students feedback</h2>
			<div className="flex">
				<div className="h-[178px] w-[170px] rounded bg-white p-4 text-center text-5xl text-hero-text shadow-sm">
					{rating}
					<RatingStars rating={rating || 0} />
					<p className="text-sm">Course Rating</p>
				</div>

				<div>
					{[...Array(5)]
						.map((_, index) => {
							const count = course.reviews.filter(
								(item) => item.rating === index + 1
							).length;
							const percent = (count / course.reviews.length) * 100;

							return (
								<div
									key={nanoid()}
									className="mb-2 ml-8 flex items-center gap-4"
								>
									<div className="h-2.5 w-[250px] rounded bg-white shadow-sm">
										<div
											className="h-2.5 rounded bg-primary"
											style={{ width: `${percent}%` }}
										/>
									</div>
									<div className="flex gap-3 ">
										{[...Array(5)].map((_, i) => (
											<FaStar
												key={nanoid()}
												className={clsx(
													'text-lg filter hover:contrast-50',
													index >= i ? 'text-primary' : 'text-gray-300'
												)}
											/>
										))}
										<p className="text-hero-text">{percent}%</p>
									</div>
								</div>
							);
						})
						.reverse()}
				</div>
			</div>
			<div className="mt-4 flex flex-col">
				{course.reviews.map((review) => (
					<ReviewTabItem review={review} key={review.createdAt} />
				))}
			</div>
		</div>
	);
}
