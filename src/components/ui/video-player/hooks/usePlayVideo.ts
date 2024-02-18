import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { IPlayVideo, IVideoElement } from '../types/video-player.interface';

export const usePlayVideo = (): IPlayVideo => {
	const videoRef = useRef<IVideoElement>(null);
	const [isPause, setIsPause] = useState(true);
	const [volume, setVolume] = useState(0.7);

	const togglePlay = useCallback(() => {
		setIsPause(!isPause);
	}, [isPause]);

	const toggleVideo = useCallback(() => {
		if (!isPause) {
			videoRef.current?.play();
		} else {
			videoRef.current?.pause();
		}
	}, [isPause]);

	useEffect(() => toggleVideo(), [isPause, toggleVideo]);

	useEffect(() => {
		if (videoRef.current) videoRef.current.volume = volume;
	}, [volume]);

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 5;
	};
	const backward = () => {
		if (videoRef.current) videoRef.current.currentTime -= 5;
	};

	const fullScreen = () => {
		const video = videoRef.current;
		if (!video) return;
		if (video.requestFullscreen) {
			video.requestFullscreen();
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen();
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen();
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen();
		}
	};

	return useMemo(
		() => ({
			videoRef,
			properties: { isPause, volume },
			actions: {
				toggleVideo,
				forward,
				backward,
				fullScreen,
				setVolume,
				togglePlay,
			},
		}),
		[isPause, toggleVideo, togglePlay, volume]
	);
};
