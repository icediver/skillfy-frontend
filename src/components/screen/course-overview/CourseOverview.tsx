import { PriceCard } from '@/components/ui/cards/price-card/PriceCard';
import { Statistics } from '@/components/ui/statistics/Statistics';
import { VideoPlayer } from '@/components/ui/video-player/VideoPlayer';
import {
	ICourseDetails,
	TypePaginationCourses,
} from '@/types/course.interface';
import { SecondSection } from '../home/second-section/SecondSection';
import { QuoteSection } from './quote-section/QuoteSection';
import { CourseTabs } from '@/components/ui/course-tabs/CourseTabs';

interface ICourseOverview extends ICourseDetails {
	similar: TypePaginationCourses;
}

import styles from './CourseOverview.module.scss';

export function CourseOverview({ course, rating, similar }: ICourseOverview) {
	return (
		<>
			<section className={styles.background}>
				<div className="container pt-20">
					<h1 className="mb-5">{course?.title}</h1>
					<div className="grid grid-cols-5 gap-12">
						<p className="col-span-3 text-hero-text">
							{course?.description.slice(0, 200)}
							{'...'}
						</p>
						<Statistics
							rating={rating}
							views={course?.views}
							duration={10}
							lessons={course?.videos.length}
						/>
					</div>
					<div className="flex gap-12 pt-12">
						<div className=" w-[770px]">
							<div className="overflow-hidden rounded-lg shadow-lg">
								<VideoPlayer video={course?.videos[0]} startTime={1.2} />
							</div>
							<CourseTabs course={course} rating={rating} />
						</div>
						<div>
							<PriceCard price={course?.price} sale={50} language={'english'} />
						</div>
					</div>
				</div>
			</section>
			<SecondSection courses={similar} title="More coursess you might like" />
			<QuoteSection />
		</>
	);
}
