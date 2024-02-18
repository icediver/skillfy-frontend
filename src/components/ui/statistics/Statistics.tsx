import { FaRegClock, FaRegStar } from 'react-icons/fa6';
import { FiPlayCircle } from 'react-icons/fi';
import { IoEyeOutline } from 'react-icons/io5';
import { LuClock9 } from 'react-icons/lu';

interface IStatictics {
	rating: number;
	views: number;
	duration: number;
	lessons: number;
}

export function Statistics({ rating, views, duration, lessons }: IStatictics) {
	return (
		<div className="col-span-2 grid w-full grid-cols-3  [&>div>span]:text-hero-text">
			<div className="col-span-2 flex items-center gap-2.5">
				<FaRegStar className="text-1.25xl text-yellow-500" />
				<span>{rating}</span>
			</div>

			<div className="flex items-center gap-2.5">
				<IoEyeOutline className="text-1.25xl text-primary" />
				<span> {views}</span>
			</div>

			<div className="col-span-2 flex items-center gap-2.5">
				<LuClock9 className="text-1.25xl text-black" />
				<span>Duration</span>
				<span>{duration}</span>
				<span>Weeks</span>
			</div>

			<div className="flex items-center gap-2.5">
				<FiPlayCircle className="text-1.25xl text-green-600" />
				<span>{lessons}</span>
				<span>Lessons</span>
			</div>
		</div>
	);
}
