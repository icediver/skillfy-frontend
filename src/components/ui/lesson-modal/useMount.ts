import { useEffect, useState } from 'react';
const ANIMATION_TIME = 800;

export const useMount = ({ opened }: { opened: boolean }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		if (opened && !mounted) {
			setMounted(true);
		} else if (!opened && mounted) {
			setTimeout(() => {
				setMounted(false);
			}, ANIMATION_TIME);
		}
	}, [opened]); //eslint-disable-line react-hooks/exhaustive-deps

	return {
		mounted,
	};
};
