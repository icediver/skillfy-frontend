import { Hero } from './hero/Hero';
import { SecondSection } from './second-section/SecondSection';
import { ChoiseCourse } from './choise-course/ChoiseCourse';
import { OnlineLessons } from './online-lessons/OnlineLessons';
import { About } from './about/About';
import { Testimonials } from './testimonials/Testimonials';
import { Partners } from './partners/Partners';
import { Offer } from './offer/Offer';
import { TypePaginationCourses } from '@/types/course.interface';

interface IHome {
	courses: TypePaginationCourses;
}

export function Home({ courses }: IHome) {
	return (
		<main className="animate-opacity [&_section]:container ">
			<Hero />
			<SecondSection courses={courses} title="Get choice of your course" />
			<ChoiseCourse />
			<OnlineLessons />
			<About />
			<Testimonials />
			<Partners />
			<Offer />
		</main>
	);
}
