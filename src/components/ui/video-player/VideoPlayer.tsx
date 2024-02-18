'use client';
import { useEffect } from 'react';

import { useVideoPlayer } from './hooks/useVideoPlayer';
import Remote from './remote/Remote';
import { IVideo } from '@/types/video.interface';

interface IVideoPlayer {
	video: IVideo;
	isDisabledHotkey?: boolean;
	videoEndedCallback?: () => void;
	startTime?: number;
}
export function VideoPlayer({
	video: currentVideo,
	isDisabledHotkey,
	videoEndedCallback,
	startTime = 0,
}: IVideoPlayer) {
	const { actions, videoRef, properties } = useVideoPlayer();
	useEffect(() => {
		if (isDisabledHotkey) actions.setIsDisabledHotkey(isDisabledHotkey);
	}, [isDisabledHotkey, actions]);

	return (
		<div className="group relative w-full overflow-hidden scrolbar-hidden">
			<div
				className={
					'[>div]:hover:-mt-32  relative aspect-video w-full animate-opacity cursor-pointer overflow-hidden'
				}
				onClick={actions.togglePlay}
			>
				<video
					autoPlay={false}
					ref={videoRef}
					src={`${currentVideo.source}#t=${startTime}`}
					preload="metadata"
					className="h-full animate-opacity"
					onEnded={() => {
						// videoRef.current?.pause();
						actions.togglePlay();
						if (videoEndedCallback) videoEndedCallback();
					}}
				/>
			</div>

			<div className="absolute -bottom-20 w-full transition-all duration-500 group-hover:bottom-0 ">
				<Remote actions={actions} properties={properties} videoRef={videoRef} />
			</div>
		</div>
	);
}
