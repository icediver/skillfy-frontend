'use client';
import PrevNextButton from '@/components/ui/prev-next-button/PrevNextButton';
import { VideoPlayer } from '@/components/ui/video-player/VideoPlayer';
import { LessonsList } from './lessons-list/LessonsList';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';
import { ICourseDetails } from '@/types/course.interface';
import { VideoFooter } from '@/components/ui/video-player/video-footer/VideoFooter';
import { nanoid } from 'nanoid';
import { LessonModal } from '@/components/ui/lesson-modal/LessonModal';
import { CourseService } from '@/services/course/course.service';
import { useFocused } from '@/components/ui/video-player/hooks/useFocused';
import { CourseSearch } from '@/components/ui/search/CourseSearch';
import { Favorite } from '@/components/ui/favorite/Favorite';
import { CourseReview } from '@/components/ui/course-review/CourseReview';

export function CourseExtends({
	course: { course, rating },
}: {
	course: ICourseDetails;
}) {
	const [videoIndex, setVideoIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const { ref, isDisabledHotkey } = useFocused();
	const [opened, setOpened] = useState(false);
	const { push } = useRouter();
	const { videos } = course;
	const effectRan = useRef(false);

	function nextHandler() {
		if (videos?.length) {
			if (videoIndex < videos?.length - 1) {
				setVideoIndex((prevState) => prevState + 1);
			}
			if (videoIndex >= videos?.length - 1) setVideoIndex(0);
		}
	}
	useEffect(() => {
		if (!effectRan.current) {
			CourseService.updateViews(course.id);
		}

		return () => {
			effectRan.current = true;
		};
	}, []); // eslint-disable-line

	useEffect(() => {
		if (videoIndex > 0) setProgress((videoIndex / (videos?.length || 1)) * 100);
		if (videoIndex === 0) setProgress(0);
	}, [videoIndex, videos.length]);

	function repeatLesson() {
		setOpened(false);
	}
	function nextLesson() {
		if (videoIndex < videos.length - 1) nextHandler();
		setOpened(false);
	}

	return (
		<div className="flex  w-screen animate-opacity bg-white  text-white">
			<aside className="w-[450px] animate-opacity">
				<div className="flex h-[326px] w-full flex-col justify-between  bg-primary">
					<header className=" px-12 ">
						<div className="flex items-center justify-between  py-6">
							<div className="flex items-center gap-5">
								<PrevNextButton
									direction="prev"
									variant="rounded"
									onClick={() => push('/')}
								/>
								<p>Back</p>
							</div>
							<Favorite courseId={course.id} />
						</div>
						<p className="text-2xl font-medium">{course.title}</p>
					</header>
					<footer>
						<p className="font-regular text-center text-base font-medium">
							{progress.toFixed(0)}% Completed
						</p>
						<div
							className="h-2.5 bg-progress transition-all duration-500"
							style={{ width: `${progress}%` }}
						/>
					</footer>
				</div>
				<CourseSearch
					ref={ref}
					variant="secondary"
					className=" bg-gray-300 pl-16"
				/>
				<LessonsList
					videos={videos || []}
					setVideoIndex={setVideoIndex}
					videoIndex={videoIndex}
				/>
			</aside>

			<div>
				<header className="flex justify-between px-12 py-2 text-hero-text">
					<p className="text-2xl font-medium text-hero-text">
						{videos[videoIndex]?.title || course.title}
					</p>
					<Button onClick={nextHandler}>Next Lesson</Button>
				</header>
				<div className="flex w-full gap-10">
					<div className="w-[1470px]">
						{videos.length && (
							<VideoPlayer
								video={videos[videoIndex]}
								isDisabledHotkey={isDisabledHotkey}
								videoEndedCallback={() => {
									if (videoIndex < videos.length - 1) setOpened(true);
									if (videoIndex === videos.length - 1) {
										setProgress(100);
									}
								}}
							/>
						)}
					</div>
				</div>

				<div className="mx-auto h-screen w-[1370px]">
					<VideoFooter />
					<p className="text-1.5xl font-medium text-hero-text">Reviews:</p>
					{course.reviews.map((review) => (
						<CourseReview review={review} key={nanoid()} variant="primary" />
					))}
				</div>
			</div>
			<LessonModal
				opened={opened}
				onClose={() => setOpened(false)}
				next={nextLesson}
				repeat={repeatLesson}
			/>
		</div>
	);
}
