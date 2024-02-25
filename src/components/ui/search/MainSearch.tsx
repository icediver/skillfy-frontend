import { FiSearch } from 'react-icons/fi';

export function MainSearch() {
	return (
		<div className="relative h-[70px] w-full rounded-3xl  md:w-[549px]">
			<input
				type="text"
				placeholder="Search your favorite course"
				className="h-full w-full rounded-lg pl-8 text-hero-text outline-none"
			/>
			<button className="absolute right-0 top-0 z-10  flex h-[70px] w-24 items-center justify-center rounded-r-lg bg-primary text-4xl text-white ">
				<FiSearch className="active:translate-y-1" />
			</button>
			<div className="z-0 -mt-10 h-[70px] rounded-lg bg-primary-shadow md:w-[549px]" />
		</div>
	);
}
