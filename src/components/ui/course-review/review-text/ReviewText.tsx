'use client';
import clsx from 'clsx';
import { useEffect, useRef, useState, memo } from 'react';

import AnimateHeight, { Height } from 'react-animate-height';
import { FaMinus, FaPlus } from 'react-icons/fa6';

interface IReviewText {
	variant: 'primary' | 'secondary';
	text: string;
}

export const ReviewText = memo(function ReviewText({
	variant,
	text,
}: IReviewText) {
	const ref = useRef<HTMLDivElement | null>(null);
	const [height, setHeight] = useState<Height>('auto');
	const [reviewText, setReviewText] = useState('');
	const [isFullText, setIsFullText] = useState(false);

	useEffect(() => {
		const element = ref.current as HTMLDivElement;
		const resizeObserver = new ResizeObserver(() => {
			setHeight(element.clientHeight);
		});
		resizeObserver.observe(element);
		return () => resizeObserver.disconnect();
	}, []);

	useEffect(() => {
		if (variant === 'secondary') {
			setReviewText(text.split(' ').slice(0, 27).join(' '));
			setIsFullText(false);
		} else setReviewText(text);
	}, []); //eslint-disable-line

	function clickHandler() {
		if (isFullText) {
			setReviewText(text.split(' ').slice(0, 27).join(' '));
		} else {
			setReviewText(text);
		}
		setIsFullText(!isFullText);
	}

	return (
		<div className="py-6">
			<AnimateHeight
				height={height}
				contentClassName="auto-content"
				contentRef={ref}
				duration={700}
				disableDisplayNone
			>
				<p
					className={clsx('text-hero-text', {
						// ['text-sm']: variant === 'secondary',
					})}
				>
					{reviewText}
					{variant === 'primary' ? null : (
						<button
							onClick={clickHandler}
							className="inline-block  pl-2  text-hero-text"
						>
							{!isFullText && <span className="text-hero-text">...</span>}
							{!isFullText ? <FaPlus className="ml-2 inline" /> : <FaMinus />}
						</button>
					)}
				</p>
			</AnimateHeight>
		</div>
	);
});
