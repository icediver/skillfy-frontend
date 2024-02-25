'use client';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export enum MediaQueriesEnum {
	sm = 'sm',
	md = 'md',
	lg = 'lg',
	xl = 'xl',
}

export function TailwindContainer() {
	const [mediaQueries, setMediaQueries] = useState(MediaQueriesEnum.sm);

	const [container] = useState(() => document.createElement('div'));

	useEffect(() => {
		document.body.appendChild(container);
		const handleResize = () => {
			if (window.innerWidth <= 640) {
				setMediaQueries(MediaQueriesEnum.sm);
			} else if (window.innerWidth <= 768) {
				setMediaQueries(MediaQueriesEnum.md);
			} else if (window.innerWidth <= 1024) {
				setMediaQueries(MediaQueriesEnum.lg);
			} else {
				setMediaQueries(MediaQueriesEnum.xl);
			}
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
			document.body.removeChild(container);
		};
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return ReactDOM.createPortal(
		<div className="fixed bottom-5 right-5 z-50  flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white">
			{mediaQueries}
		</div>,
		container
	);
}
