import clsx from 'clsx';
import { HTMLAttributes, forwardRef } from 'react';
import { FiSearch } from 'react-icons/fi';
interface Props extends HTMLAttributes<HTMLInputElement> {
	variant?: 'primary' | 'secondary';
}
export const CourseSearch = forwardRef<HTMLInputElement, Props>(
	function CourseSearch(props, ref) {
		const { className, variant = 'primary', ...rest } = props;
		return (
			<div
				className={clsx('relative', {
					['rounded-3xl text-[#CAC6D4]']: variant === 'primary',
					['text-gray-400']: variant === 'secondary',
				})}
			>
				<input
					ref={ref}
					type="text"
					placeholder="Search here"
					className={clsx(
						'w-full  py-4 pl-16  outline-none',
						{
							['rounded-lg']: variant === 'primary',
						},
						className
					)}
					{...rest}
				/>
				<FiSearch className="absolute left-4 top-1/4 text-1.5xl active:translate-y-1" />
			</div>
		);
	}
);
