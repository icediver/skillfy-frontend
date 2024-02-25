'use client';
import PatternGray from '@/assets/image/pattern-gray.png';
import Button from '@/components/ui/button/Button';
import { CourseCard } from '@/components/ui/cards/course-card/CourseCard';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { courses } from './courses.data';
import { TypePaginationCourses } from '@/types/course.interface';
import { useInView } from 'react-intersection-observer';

import { useSwipeable } from 'react-swipeable';
import { SwipeButtonsBlock } from '@/components/ui/swipe-buttons-block/SwipeButtonsBlock';
import { useResponsiveSize } from '@/hooks/useResponsiveSize';

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
	const { perPage, size } = useResponsiveSize();

	const handlers = useSwipeable({
		onSwipedLeft: () => {
			if (count < courses.length - 1) setCount((state) => state + 1);
		},
		onSwipedRight: () => {
			if (count > 0) setCount((state) => state - 1);
		},
	});
	const [count, setCount] = useState(0);
	function prevNextHandler({ direction }: { direction: 'prev' | 'next' }) {
		if (paginatedCourses.courses.length <= perPage) return;
		if (direction === 'next' && count < courses.length - perPage)
			setCount((state) => state + 1);
		if (direction === 'prev' && count > 0) setCount((state) => state - 1);
	}

	return (
		<article className="relative w-full bg-second-section-background px-4 xl:h-[871px] xl:px-0">
			<Image
				src={PatternGray}
				alt="pattern"
				className="absolute bottom-24 left-1/2 z-0 -ml-10 hidden md:block"
			/>
			<section className="container overflow-hidden pt-20">
				<div className="mb-10 flex justify-between gap-8">
					<div className="text-1.25xl font-medium xl:text-4xl">{title}</div>
					<div className="flex gap-6">
						<div className="hidden items-center gap-4 text-md text-hero-text xl:flex ">
							<p>Design</p>
							<FaChevronDown size={12} />
						</div>
						<Button className="max-h-16 min-w-32">View all</Button>
					</div>
				</div>
				<div {...handlers}>
					<div
						ref={ref}
						className="relative z-10 flex h-[515px] gap-7 transition-all duration-1000"
						style={{ marginLeft: -count * 398 }}
						// {...handlers}
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
				</div>
				<SwipeButtonsBlock
					prevNextHandler={prevNextHandler}
					length={courses.length}
					count={count}
					perPage={perPage}
				/>
			</section>
		</article>
	);
}
