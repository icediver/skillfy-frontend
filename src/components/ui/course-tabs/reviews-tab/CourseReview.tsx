import { IFullReview } from '@/types/reviews.interface';
import timeSince from '@/utils/timeSince';
import clsx from 'clsx';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { useInView } from 'react-intersection-observer';
import { ReviewText } from '../../course-review/review-text/ReviewText';

interface ICourseReview {
	review: IFullReview;
	variant?: 'primary' | 'secondary';
}

export function CourseReview({ review, variant = 'primary' }: ICourseReview) {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
		rootMargin: '100px 0px 0px 0px',
		delay: 500,
	});

	return (
		<div ref={ref}>
			<div
				className={clsx({
					['bg-review duration-1000 ease-out animate-in fade-in slide-in-from-right-24']:
						inView && variant === 'primary',
				})}
			>
				<div
					className={clsx('w-full py-4 text-black ', {
						['mt-4 bg-review !p-8 ']: variant === 'primary',
					})}
				>
					<div className={'flex items-center justify-between  '}>
						<div className="flex items-center gap-10">
							<Image
								src={review.user.avatarPath || ''}
								alt={review.user.name}
								width={60}
								height={60}
								className={variant === 'secondary' ? 'rounded' : ''}
							/>
							<div>
								<p className="font-medium">{review.user.name}</p>
								<p className="text-xs">
									{new Date(review.createdAt).toLocaleString('en-Us', {
										day: '2-digit',
										month: 'short',
										year: 'numeric',
										hour: 'numeric',
										minute: '2-digit',
									})}
								</p>
							</div>
						</div>
						<div>
							<div className="mt-2 flex gap-2 text-[#F3B23A]">
								{[...Array(5)].map((_, index) => {
									if (index < review.rating) return <FaStar key={nanoid()} />;
									return <FaRegStar key={nanoid()} />;
								})}
							</div>
							<p className="mt-2 text-xs">
								{timeSince(new Date(review.createdAt).toLocaleString())}
							</p>
						</div>
					</div>
					<ReviewText variant={variant} text={review.text} />
				</div>
			</div>
		</div>
	);
}
