import CourseButton from '@/components/ui/course-button/CourseButton';
import { IVideo } from '@/types/video.interface';
import clsx from 'clsx';
import { Dispatch, SetStateAction } from 'react';
import { FiBook } from 'react-icons/fi';
import { LuCalendarDays } from 'react-icons/lu';

interface ILessonsList {
	videos: IVideo[];
	videoIndex: number;
	setVideoIndex: Dispatch<SetStateAction<number>>;
}

export function LessonsList({
	videos,
	setVideoIndex,
	videoIndex,
}: ILessonsList) {
	return (
		<ul className="row-span-7 w-full rounded-2xl bg-white p-6">
			<header className="flex items-center justify-between text-1.5xl">
				<p className="px-2 text-1.25xl text-hero-text">Lesson learn for you</p>
				<LuCalendarDays className="text-primary" />
			</header>
			{videos.map((video, index) => (
				<li
					className={clsx(
						'my-2 flex cursor-pointer items-center justify-between rounded px-4 py-2 text-black',
						{
							['animate-opacity bg-[#43C8B1] !text-white']:
								index === videoIndex,
						}
					)}
					key={video.title}
					onClick={() => setVideoIndex(index)}
				>
					<div className="flex items-center gap-4">
						<FiBook
							className={clsx('text-primary', {
								['!text-white']: index === videoIndex,
							})}
						/>
						<p
							className={clsx('text-hero-text', {
								['!text-gray-700/30 line-through']: index < videoIndex,
							})}
						>
							{video.title}
						</p>
					</div>
					<CourseButton
						variant={index === videoIndex ? 'primary' : 'third'}
						className={clsx('!h-8 !p-1', {
							['!text-white']: index === videoIndex,
						})}
					>
						30 min
					</CourseButton>
				</li>
			))}
		</ul>
	);
}
