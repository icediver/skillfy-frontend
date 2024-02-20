import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	variant?: 'primary' | 'secondary' | 'third';
}
export default function Button({
	children,
	className,
	variant = 'primary',
	...props
}: IButton) {
	return (
		<button
			{...props}
			className={clsx(
				'rounded px-6 py-2.5  text-white transition-all active:translate-y-1',
				{
					['bg-primary']: variant === 'primary',
					['bg-background']: variant === 'secondary',
					['bg-emergency']: variant === 'third',
				},
				className
			)}
		>
			{children}
		</button>
	);
}
