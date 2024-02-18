import PrevNextButton from '@/components/ui/prev-next-button/PrevNextButton';
import { TestimonialsCard } from './testimonials-card/TestimonialsCard';

export function Testimonials() {
	return (
		<div className="h-[539px] w-full bg-second-section-background">
			<section>
				<header className="flex items-center justify-between pb-10 pt-20">
					<p className="text-4xl font-medium text-black">
						What our students have to say
					</p>
					<div className="flex gap-5">
						<PrevNextButton direction={'prev'} />
						<PrevNextButton direction="next" />
					</div>
				</header>
				<div className="grid grid-cols-2 gap-8">
					<TestimonialsCard
						course={'Themadbrains'}
						role={'Student'}
						testimonials={
							'Skillfy is a life saver. I don’t have the time/money for a college education. My goal is to become a freelance web developer, and thanks to Skillfy.'
						}
						rating={0}
						avatar={'https://i.pravatar.cc/90?img=25'}
					/>
					<TestimonialsCard
						course={'UIUX Designer'}
						role={'Student'}
						testimonials={
							'Skillfy is a life saver. I don’t have the time/money for a college education. My goal is to become a freelance web developer, and thanks to Skillfy.'
						}
						rating={0}
						avatar={'https://i.pravatar.cc/90?img=27'}
					/>
				</div>
			</section>
		</div>
	);
}
