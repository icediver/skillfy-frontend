'use client';
import PatternGray from '@/assets/image/pattern-gray.png';
import Button from '@/components/ui/button/Button';
import { CourseCard } from '@/components/ui/cards/course-card/CourseCard';
import PrevNextButton from '@/components/ui/prev-next-button/PrevNextButton';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { courses } from './courses.data';
import { TypePaginationCourses } from '@/types/course.interface';
import { useInView } from 'react-intersection-observer';

interface ISecondSection {
	courses: TypePaginationCourses;
	title: string;
}

export function SecondSection({
	courses: paginatedCourses,
	title,
}: ISecondSection) {
	const { ref, inView, entry } = useInView({
		/* Optional options */
		threshold: 0,
		delay: 100,
	});
	const [count, setCount] = useState(0);
	function prevNextHandler({ direction }: { direction: 'prev' | 'next' }) {
		if (paginatedCourses.courses.length <= 3) return;
		if (direction === 'next' && count < courses.length - 3)
			setCount((state) => state + 1);
		if (direction === 'prev' && count > 0) setCount((state) => state - 1);
	}

	return (
		<article className="relative h-[871px] w-full bg-second-section-background ">
			<Image
				src={PatternGray}
				alt="pattern"
				className="absolute bottom-24 left-1/2 z-0 -ml-10"
			/>
			<section className="container overflow-hidden pt-20">
				<div className="mb-10 flex justify-between">
					<div className="text-4xl font-medium">{title}</div>
					<div className="flex gap-6">
						<div className="flex items-center gap-4 text-md text-hero-text">
							<p>Design</p>
							<FaChevronDown size={12} />
						</div>
						<Button>View all</Button>
					</div>
				</div>
				<div
					ref={ref}
					className="relative z-10 flex h-[515px] gap-7 transition-all duration-1000"
					style={{ marginLeft: -count * 398 }}
				>
					{inView &&
						paginatedCourses.courses.map((course) => (
							<CourseCard
								path={'course-overview'}
								slug={course.slug}
								images={course.images}
								rating={course.rating || 0}
								views={course.views}
								lessons={course.videos.length}
								title={course.title}
								teacher={course.teacher.name}
								price={course.price}
								sale={49}
								teacherAvatar={course.teacher.avatarPath || ''}
								key={course.title}
								courseId={course.id}
							/>
						))}
				</div>
				<div className="flex items-center justify-between pt-9">
					<PrevNextButton
						direction={'prev'}
						onClick={() => prevNextHandler({ direction: 'prev' })}
					/>
					<div className="flex-start flex w-full px-2">
						<div
							className="h-1 bg-primary"
							style={{
								width: `${(1 - (courses.length - count - 3) / (courses.length - 3)) * 100}%`,
							}}
						/>
					</div>
					<PrevNextButton
						direction={'next'}
						onClick={() => prevNextHandler({ direction: 'next' })}
					/>
				</div>
			</section>
		</article>
	);
}
