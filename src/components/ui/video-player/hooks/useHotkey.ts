import { useEffect, useState } from 'react';
import { IVideoActions } from '../types/video-player.interface';

export const useHotkey = (actions: IVideoActions) => {
	const [isDisabledHotkey, setIsDisabledHotkey] = useState(false);
	useEffect(() => {
		const handleKeydown = (e: KeyboardEvent) => {
			if (!isDisabledHotkey) {
				switch (e.key) {
					case 'ArrowRight':
						actions.forward();
						break;
					case 'ArrowLeft':
						actions.backward();
						break;
					case ' ':
						{
							e.preventDefault();
							actions.togglePlay();
						}
						break;
					case 'f':
						actions.fullScreen();
						break;
					default:
						return;
				}
			}
		};

		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	}, [isDisabledHotkey, actions]);

	return { setIsDisabledHotkey };
};
