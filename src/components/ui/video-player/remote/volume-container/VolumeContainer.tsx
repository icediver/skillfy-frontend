import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { SlVolume2, SlVolumeOff } from 'react-icons/sl';

interface IVolumeContainer {
	setVolume: Dispatch<SetStateAction<number>>;
	volume: number;
}

export function VolumeContainer({ setVolume, volume }: IVolumeContainer) {
	const [isMicrophoneActive, setIsMicrophoneActive] = useState(true);
	const [volumeContainer, setVolumeContainer] = useState({} as DOMRect);

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const rect = ref?.current?.getBoundingClientRect();
		if (rect) setVolumeContainer(rect);
	}, []);

	function clickHandler(e: React.MouseEvent) {
		const newVolume = (e.clientX - volumeContainer.x) / volumeContainer.width;

		setVolume(newVolume);
	}

	return (
		<>
			<button
				onClick={() => {
					setIsMicrophoneActive(!isMicrophoneActive);
					if (isMicrophoneActive) setVolume(0);
					if (!isMicrophoneActive) setVolume(0.7);
				}}
				className="text-xl text-white"
			>
				{isMicrophoneActive ? <SlVolume2 /> : <SlVolumeOff />}
			</button>
			<div
				ref={ref}
				className="h-1.5 w-32 cursor-pointer overflow-hidden rounded bg-gray-500"
				onClick={clickHandler}
			>
				<div className="h-1.5 bg-white" style={{ width: `${volume * 100}%` }} />
			</div>
		</>
	);
}
