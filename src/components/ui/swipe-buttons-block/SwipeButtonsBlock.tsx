import { useResponsiveSize } from '@/hooks/useResponsiveSize';
import PrevNextButton from '../prev-next-button/PrevNextButton';

interface ISwipeButtonsBlock {
	prevNextHandler: ({ direction }: { direction: 'prev' | 'next' }) => void;
	length: number;
	count: number;
	perPage?: number;
}

export function SwipeButtonsBlock({
	prevNextHandler,
	count,
	length,
	perPage = 3,
}: ISwipeButtonsBlock) {
	return (
		<div className="flex items-center justify-between pb-10 pt-9 md:pb-0">
			<PrevNextButton
				direction={'prev'}
				onClick={() => prevNextHandler({ direction: 'prev' })}
			/>
			<div className="flex-start flex w-full px-2">
				<div
					className="h-1 bg-primary"
					style={{
						width: `${(1 - (length - count - perPage) / (length - perPage)) * 100}%`,
					}}
				/>
			</div>
			<PrevNextButton
				direction={'next'}
				onClick={() => prevNextHandler({ direction: 'next' })}
			/>
		</div>
	);
}
