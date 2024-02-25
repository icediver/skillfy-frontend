import pattern from '@/assets/image/Pattern.png';
import hero from '@/assets/image/hero.jpg';
import { MainSearch } from '@/components/ui/search/MainSearch';

import Image from 'next/image';
import PlayButton from '@/components/ui/play-button/PlayButton';
export function Hero() {
	return (
		<article className="relative z-0 w-full bg-main-background pb-10 xl:h-[900px]  xl:pb-0 xl:pt-28">
			<Image
				src={pattern}
				alt={'pattern'}
				className="absolute bottom-1 left-1 hidden md:block"
			/>
			<Image
				src={pattern}
				alt={'pattern'}
				className="right-1 top-1/4 hidden  md:absolute md:block"
			/>
			<section className="flex flex-wrap justify-center gap-10 px-4 xl:pt-12">
				<div className="xl:pt-20">
					<p className="text-2.5xl font-bold md:text-5xl">
						Turn your
						<br />
						ambition into a<br />
						success story
					</p>
					<p className="py-10 text-hero-text md:text-1.5xl">
						Choose from over 100,000 online video
						<br />
						courses with new additions published every mont
					</p>
					<MainSearch />
				</div>
				<div className="relative my-10 mr-14 sm:mx-10 sm:h-[600px] sm:w-[482px] xl:my-0">
					<div className="absolute left-10 top-10 z-0 h-full w-full rounded-3xl border-2 border-primary"></div>
					<div className="relative z-10">
						<Image
							src={hero}
							alt="video"
							className="rounded-3xl border border-gray-200"
						/>
					</div>
					<PlayButton className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2  -translate-y-1/2" />
				</div>
			</section>
		</article>
	);
}
