import { useEffect, useMemo, useState } from 'react';
import { usePlayVideo } from './usePlayVideo';
import { useHotkey } from './useHotkey';
import { IVideoPlayer } from '../types/video-player.interface';
import { useProgress } from './useProgress';

export const useVideoPlayer = (): IVideoPlayer => {
	const { videoRef, properties, actions } = usePlayVideo();
	const { videoTime, currentTime, progress } = useProgress({ videoRef });
	const { setIsDisabledHotkey } = useHotkey(actions);

	return useMemo(
		() => ({
			videoRef,
			actions: {
				...actions,
				setIsDisabledHotkey,
			},
			properties: {
				...properties,
				currentTime,
				progress,
				videoTime,
			},
		}),
		[
			properties,
			currentTime,
			progress,
			videoTime,
			actions,
			videoRef,
			setIsDisabledHotkey,
		]
	);
};
