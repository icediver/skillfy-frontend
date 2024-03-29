import Image from 'next/image';
import { FaRegStar } from 'react-icons/fa6';
import { FiPlayCircle } from 'react-icons/fi';
import { IoEyeOutline } from 'react-icons/io5';
import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

export interface ICourseCard extends ButtonHTMLAttributes<HTMLButtonElement> {
	path: string;
	courseId: number;
	images: string[];
	rating: number;
	views: number;
	lessons: number;
	title: string;
	teacher: string;
	teacherAvatar: string;
	price: number;
	sale: number;
	slug: string;
}

export function CourseCard({
	courseId,
	images,
	title,
	sale,
	rating,
	views,
	lessons,
	teacher,
	price,
	teacherAvatar,
	slug,
	className,
	path,
}: ICourseCard) {
	return (
		<Link
			href={`/${path}/${slug}`}
			className={clsx(
				'h-[515px] w-[370px] rounded bg-white p-4 duration-700 animate-in fade-in zoom-in spin-in',
				className
			)}
		>
			<div className="mx-auto h-[263px] w-[337px] overflow-hidden rounded">
				<Image src={images[0]} alt="title" width={337} height={263} />
			</div>
			<div className="my-4 flex justify-between">
				<div className="flex items-center gap-2.5">
					<FaRegStar className="text-1.25xl text-yellow-500" />
					<span>{rating}</span>
				</div>
				<div className="flex items-center gap-2.5">
					<IoEyeOutline className="text-1.25xl text-primary" />
					<span> {views}</span>
				</div>
				<div className="flex items-center gap-2.5">
					<FiPlayCircle className="text-green-600" />
					{lessons}
					<span>Lesion</span>
				</div>
			</div>
			<div className="flex h-[170px] flex-col justify-between pb-5">
				<div className="text-1.5xl">{title}</div>
				<footer className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Image
							src={teacherAvatar}
							alt="teacher"
							width={40}
							height={40}
							className="rounded-lg"
						/>
						<span className="text-gray-500">{teacher}</span>
					</div>
					<div className="flex gap-4">
						<span className="line-through">${price}</span>
						<span className="font-bold text-primary">${sale}</span>
					</div>
				</footer>
			</div>
		</Link>
	);
}
