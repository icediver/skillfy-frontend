import { FiSearch } from 'react-icons/fi';

export function EnterCoupon() {
	return (
		<div className="relative w-full   rounded-3xl">
			<input
				type="text"
				placeholder="Enter Coupon"
				className="h-full w-full rounded-lg p-2.5 pl-4 text-hero-text outline-none"
			/>
			<button className="absolute right-0 top-0 z-10 flex h-full w-2/5 items-center justify-center rounded-r-lg bg-primary text-white transition-all active:translate-y-1">
				Apply
			</button>
		</div>
	);
}
