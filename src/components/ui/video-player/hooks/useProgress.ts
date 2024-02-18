import { RefObject, useEffect, useState } from 'react';

interface IUseProgress {
	videoRef: RefObject<HTMLVideoElement>;
}

export const useProgress = ({ videoRef }: IUseProgress) => {
	const [currentTime, setCurrentTime] = useState(0);
	const [videoTime, setVideoTime] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const originalDuration = videoRef.current?.duration;
		if (originalDuration) setVideoTime(originalDuration);
	}, [videoRef, currentTime, videoTime]);

	useEffect(() => {
		const video = videoRef.current;

		if (!video) return;

		const updateProgress = () => {
			setCurrentTime(video.currentTime);
			setProgress((video.currentTime / videoTime) * 100);
		};
		video.addEventListener('timeupdate', updateProgress);

		return () => {
			video.removeEventListener('timeupdate', updateProgress);
		};
	}, [videoTime, videoRef]);

	return { currentTime, progress, videoTime };
};
