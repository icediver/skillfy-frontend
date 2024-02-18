'use client';
import { useEffect, useRef, useState } from 'react';
import { ITabsElement, tabsData } from './data';
import clsx from 'clsx';
import AnimateHeight, { Height } from 'react-animate-height';

export function CourseTabs({ course, rating }: ITabsElement) {
	const [actibeTab, setActibeTab] = useState(0);
	const { Component } = tabsData[actibeTab];
	const [height, setHeight] = useState<Height>('auto');
	const contentDiv = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const element = contentDiv.current as HTMLDivElement;

		const resizeObserver = new ResizeObserver(() => {
			setHeight(element.clientHeight);
		});

		resizeObserver.observe(element);

		return () => resizeObserver.disconnect();
	}, []);
	return (
		<div className="mb-20 ">
			<menu className=" mb-8 mt-10 flex gap-9">
				{tabsData.map(({ name }, index) => (
					<button
						key={index}
						onClick={() => setActibeTab(index)}
						className={clsx(
							'rounded bg-second-section-background px-5 py-4 text-hero-text filter transition-colors duration-500 hover:contrast-75',
							{
								['!bg-primary text-white']: actibeTab === index,
							}
						)}
					>
						{name}
					</button>
				))}
			</menu>
			<AnimateHeight
				height={height}
				contentClassName="auto-content"
				contentRef={contentDiv}
				duration={1000}
				disableDisplayNone
			>
				<Component course={course} rating={rating} />
			</AnimateHeight>
		</div>
	);
}
