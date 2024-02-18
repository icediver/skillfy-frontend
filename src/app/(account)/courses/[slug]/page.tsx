import type { Metadata } from 'next';

import { CourseService } from '@/services/course/course.service';
import { IPageSlugParam, TypeParamSlug } from '@/types/page-params.types';
import { CourseExtends } from '@/components/screen/course/CourseExtends';

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

export async function getCourse(params: TypeParamSlug) {
	const course = await CourseService.getBySlug(params?.slug as string);

	return course;
}

export default async function CoursePage({ params }: IPageSlugParam) {
	const course = await getCourse(params);
	return <CourseExtends course={course} />;
}
export const dynamicParams = false;
