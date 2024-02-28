import { nanoid } from 'nanoid';
import { FaStarHalfAlt } from 'react-icons/fa';
import { FaRegStar, FaStar } from 'react-icons/fa6';

interface IRatingStars {
	rating: number;
}

export function RatingStars({ rating }: IRatingStars) {
	const stars = Math.trunc(rating);
	const isHalfStar = rating - stars < 1 && rating - stars > 0.3;
	return (
		<div className="mb-3 flex justify-center gap-1 text-lg text-primary">
			{[...Array(5)].map((_, index) => {
				if (isHalfStar && index === stars)
					return <FaStarHalfAlt key={nanoid()} />;

				return index < stars ? (
					<FaStar key={nanoid()} />
				) : (
					<FaRegStar key={nanoid()} />
				);
			})}
		</div>
	);
}
