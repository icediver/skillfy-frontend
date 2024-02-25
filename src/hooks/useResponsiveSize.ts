import { useEffect, useState } from 'react';

export enum MediaQueriesEnum {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
}

export function useResponsiveSize() {
	const [size, setSize] = useState(MediaQueriesEnum.sm);
	const [perPage, setPerPage] = useState(3);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 640) {
				setSize(MediaQueriesEnum.sm);
			} else if (window.innerWidth <= 768) {
				setSize(MediaQueriesEnum.md);
			} else if (window.innerWidth <= 1024) {
				setSize(MediaQueriesEnum.lg);
			} else {
				setSize(MediaQueriesEnum.xl);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect(() => {
		if (size === 'xl') setPerPage(3);
		if (size === 'lg' || size === 'md') setPerPage(2);
		if (size === 'sm') setPerPage(1);
	}, [size]);

	return { size, perPage };
}
