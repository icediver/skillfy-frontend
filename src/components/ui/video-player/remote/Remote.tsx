import {
	MdOutlinePauseCircle,
	MdOutlineSkipNext,
	MdOutlineSkipPrevious,
	MdPlayCircleOutline,
} from 'react-icons/md';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { VideoProgressbar } from './video-progressbar/VideoProgressbar';
import { VolumeContainer } from './volume-container/VolumeContainer';
import { IVideoPlayer } from '../types/video-player.interface';
import { useEffect } from 'react';
export default function Remote({
	actions: { fullScreen, backward, forward, togglePlay, setVolume },
	properties: video,
	videoRef,
}: IVideoPlayer) {
	return (
		<div
			className="relative flex h-16 w-full  items-center  justify-center bg-[#46464B]  opacity-80"
			onClick={(e) => e.stopPropagation()}
		>
			<div className="flex w-full justify-between px-4 pt-3">
				<div className="flex gap-4 text-xl text-white">
					<button onClick={backward}>
						<MdOutlineSkipPrevious />
					</button>
					<button onClick={togglePlay}>
						{video.isPause ? <MdPlayCircleOutline /> : <MdOutlinePauseCircle />}
					</button>

					<button onClick={forward}>
						<MdOutlineSkipNext />
					</button>
					<VideoProgressbar
						currentTime={video.currentTime}
						videoTime={video.videoTime}
						progress={video.progress}
						videoRef={videoRef}
					/>
				</div>

				<div className="flex items-center gap-4">
					<VolumeContainer setVolume={setVolume} volume={video.volume} />
					<button onClick={fullScreen} className="text-lg text-white">
						<AiOutlineFullscreen />
					</button>
				</div>
			</div>
		</div>
	);
}
