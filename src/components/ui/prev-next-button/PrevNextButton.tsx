import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	direction: 'prev' | 'next';
	variant?: 'primary' | 'secondary' | 'third' | 'rounded';
}
export default function PrevNextButton({
	className,
	variant = 'primary',
	direction,
	...props
}: IButton) {
	return (
		<button
			{...props}
			className={clsx(
				'flex h-14 w-14 items-center justify-center rounded text-1.5xl font-bold text-gray-500  active:translate-y-1',
				{
					['bg-white hover:text-primary']: variant === 'primary',
					['bg-second-section-background hover:text-primary']:
						variant === 'secondary',
					['bg-third text-white filter  hover:contrast-75']:
						variant === 'third',
					['rounded-full bg-white/30 text-white filter hover:contrast-75']:
						variant === 'rounded',
				},

				className
			)}
		>
			{direction === 'next' ? <LuArrowRight /> : <LuArrowLeft />}
		</button>
	);
}
