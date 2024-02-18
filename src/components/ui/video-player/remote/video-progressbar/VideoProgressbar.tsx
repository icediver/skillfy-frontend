import { useEffect, useRef, useState } from 'react';

interface IVideoProgressbar {
	currentTime: number;
	videoTime: number;
	progress: number;
	videoRef: React.RefObject<HTMLVideoElement>;
}

export function VideoProgressbar({
	currentTime,
	videoTime,
	progress,
	videoRef,
}: IVideoProgressbar) {
	const [progressContainer, setProgressContainer] = useState({} as DOMRect);
	const ref = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const rect = ref?.current?.getBoundingClientRect();
		if (rect) setProgressContainer(rect);
	}, []);

	function clickHandler(e: React.MouseEvent) {
		const progress =
			((e.clientX - progressContainer.x) / progressContainer.width) * videoTime;
		if (videoRef.current) videoRef.current.currentTime = progress;
	}

	return (
		<>
			<div
				className={
					'absolute left-0 right-0 top-2 flex items-center px-2 py-0.5'
				}
			>
				<div
					ref={ref}
					className={'flex h-1 w-full  cursor-pointer rounded bg-white'}
					onClick={clickHandler}
				>
					<div
						style={{ width: `${progress}%` }}
						className={'h-full rounded-2xl bg-primary'}
					/>
				</div>
			</div>

			<div className={'flex w-28 items-center justify-start text-[0.7rem]'}>
				<p>
					{Math.floor(currentTime / 60) +
						':' +
						('0' + Math.floor(currentTime % 60)).slice(-2)}
				</p>
				<p className="mx-2"> / </p>
				<p>
					{Math.floor(videoTime / 60) +
						':' +
						('0' + Math.floor(videoTime % 60)).slice(-2)}
				</p>
			</div>
		</>
	);
}
