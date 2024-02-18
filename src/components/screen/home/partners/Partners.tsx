import PrevNextButton from '@/components/ui/prev-next-button/PrevNextButton';
import Image from 'next/image';

export function Partners() {
	return (
		<section className="h-[359px]">
			<header className="flex items-center justify-between pb-10 pt-20">
				<p className="text-4xl font-medium text-black">
					Trusted by our awesome partners
				</p>
				<div className="flex gap-5">
					<PrevNextButton direction={'prev'} variant="secondary" />
					<PrevNextButton direction="next" variant="secondary" />
				</div>
			</header>
			<div className="grid grid-cols-6 gap-9 ">
				<div className="flex h-[66px] w-[164px] justify-center overflow-hidden">
					<Image
						src={'/uploads/images/hp-logo.png'}
						alt="logo"
						width={110}
						height={66}
					/>
				</div>
				<div className="flex h-[66px] w-[164px] items-center">
					<Image
						src={'/uploads/images/forbes.jpg'}
						alt="logo"
						width={164}
						height={66}
					/>
				</div>
				<div className="h-[66px] w-[164px]  overflow-hidden ">
					<Image
						src={'/uploads/images/chevrolet.jpg'}
						alt="logo"
						width={144}
						height={66}
					/>
				</div>
				<div className="h-[66px] w-[164px]  overflow-hidden ">
					<Image
						src={'/uploads/images/smart.png'}
						alt="logo"
						width={144}
						height={66}
					/>
				</div>
				<div className="flex h-[66px] w-[164px] justify-center  overflow-hidden ">
					<Image
						src={'/uploads/images/sega.jpg'}
						alt="logo"
						width={124}
						height={66}
					/>
				</div>
				<div className="flex h-[66px] w-[164px] justify-center  overflow-hidden ">
					<Image
						src={'/uploads/images/asus.jpg'}
						alt="logo"
						width={184}
						height={66}
					/>
				</div>
			</div>
		</section>
	);
}
