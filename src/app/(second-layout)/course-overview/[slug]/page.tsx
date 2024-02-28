import { CourseOverview } from '@/components/screen/course-overview/CourseOverview';
import { CourseService } from '@/services/course/course.service';
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params.types';
import type { Metadata } from 'next';

export const revalidate = 60;
export async function generateMetadata({
	params,
}: IPageSlugParam): Promise<Metadata> {
	const { course } = await getCourse(params);
	return {
		title: course?.title,
		description: course?.description,
		openGraph: {
			images: course?.images || [],
			description: course?.description,
		},
	};
}
export async function generateStaticParams() {
	const response = await CourseService.getAll();

	const paths = response.courses.map((course) => ({
		slug: course.slug,
	}));

	return paths;
}

async function getCourse(params: TypeParamSlug) {
	const { course, rating } = await CourseService.getBySlug(
		params?.slug as string
	);

	const similar = await CourseService.getSimilar(course.id);

	return { course, similar, rating };
}

export default async function CourseOverviewPage({ params }: IPageSlugParam) {
	const res = await getCourse(params);
	return (
		<CourseOverview
			course={res.course}
			rating={res.rating}
			similar={res.similar}
		/>
	);
}
