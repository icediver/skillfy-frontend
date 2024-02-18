'use client';
import PrevNextButton from '@/components/ui/prev-next-button/PrevNextButton';
import { VideoPlayer } from '@/components/ui/video-player/VideoPlayer';
import { LessonsList } from './lessons-list/LessonsList';
import { useState } from 'react';
import { BookSection } from './book-section/BookSection';
import { CourseSearch } from '@/components/ui/search/CourseSearch';
import Button from '@/components/ui/button/Button';
import { useRouter } from 'next/navigation';
import { ICourseDetails } from '@/types/course.interface';
import { useFocused } from '@/components/ui/video-player/hooks/useFocused';

export function Course({
	course: { course, rating },
}: {
	course: ICourseDetails;
}) {
	const [videoIndex, setVideoIndex] = useState(0);
	const { ref, isDisabledHotkey } = useFocused();
	const { push } = useRouter();
	const { videos } = course;

	function nextHandler() {
		if (videos?.length) {
			if (videoIndex < videos?.length - 1) {
				setVideoIndex((prevState) => prevState + 1);
			}
			if (videoIndex >= videos?.length - 1) setVideoIndex(0);
		}
	}
	function videoEndedCallback() {
		nextHandler();
	}
	return (
		<div className="h-screen w-screen animate-opacity">
			<header className="flex justify-between px-12 py-6 text-hero-text">
				<div className="flex gap-10">
					<PrevNextButton
						direction="prev"
						variant="third"
						onClick={() => push('/')}
					/>
					<div>
						<p className="text-1.5xl ">UIUX Design Conference Meeting</p>
						<p>9 lesson 6h 30 min</p>
					</div>
					<CourseSearch ref={ref} />
				</div>
				<Button onClick={nextHandler}>Next Lesson</Button>
			</header>
			<div className="mx-12 flex w-full gap-10">
				<div className="w-[1390px]">
					{videos && (
						<VideoPlayer
							videoEndedCallback={videoEndedCallback}
							video={videos[videoIndex]}
							isDisabledHotkey={isDisabledHotkey}
						/>
					)}
				</div>
				<div className="grid w-[422px] animate-opacity grid-rows-12 gap-10">
					<LessonsList
						videos={videos || []}
						setVideoIndex={setVideoIndex}
						videoIndex={videoIndex}
					/>
					<BookSection />
				</div>
			</div>
		</div>
	);
}
