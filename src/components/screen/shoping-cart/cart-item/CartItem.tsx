import { VideoPlayer } from '@/components/ui/video-player/VideoPlayer';
import { useActions } from '@/hooks/useActions';
import { ICourse } from '@/types/course.interface';
import Image from 'next/image';
import { FiXSquare } from 'react-icons/fi';

interface ICartItem {
	course: ICourse;
	id: number;
}

export function CartItem({ course, id }: ICartItem) {
	const { removeFromCart } = useActions();
	return (
		<div className="my-3 flex w-full gap-4 rounded-lg border bg-white p-8 shadow-lg">
			<div className="h-[110px] w-[200px] overflow-hidden rounded-md shadow-lg">
				<VideoPlayer video={course?.videos[0]} startTime={1.2} />
			</div>
			<div className="flex w-[400px] flex-col justify-center overflow-hidden pl-5">
				<p className="text-nowrap text-xl font-medium">{course.title}</p>
				<div className="flex items-center gap-4 ">
					<Image
						src={course.teacher.avatarPath || ''}
						alt={course.teacher.name}
						width={40}
						height={40}
						className="my-5 rounded-md "
					/>
					<p>{course.teacher.name}</p>
				</div>
			</div>
			<div className="flex flex-col justify-center">
				<span className="text-xl font-medium">
					$
					{(course.sale
						? (course.price * course.sale) / 100
						: course.price
					).toFixed(2)}
				</span>
				<p className="text-sm text-gray-400">
					<span className="line-through">{course.price.toFixed(2)}&nbsp;</span>
					<span>{course.sale ? `${course.sale}% Off` : ''}</span>
				</p>
			</div>
			<button
				className="mx-auto flex items-center justify-center text-2xl text-primary filter hover:contrast-50"
				onClick={() => removeFromCart({ id })}
			>
				<FiXSquare />
			</button>
		</div>
	);
}
