import { ICourse } from '@/types/course.interface';
import { HTMLAttributes } from 'react';
import { ReviewsTab } from './reviews-tab/ReviewsTab';
import { OverviewTab } from './overview-tab/OverviewTab';
import { CurriculumTab } from './curriculum-tab/CurriculumTab';
import { InstructorTab } from './instructor-tab/InstructorTab';

export interface ITabsElement extends HTMLAttributes<HTMLDivElement> {
	course: ICourse;
	rating?: number;
}

export const tabsData: {
	name: string;
	Component: ({ course }: ITabsElement) => JSX.Element;
}[] = [
	{
		name: 'Overview',
		Component: OverviewTab,
	},
	{
		name: 'Curriculum',
		Component: CurriculumTab,
	},
	{
		name: 'Instructor',
		Component: InstructorTab,
	},
	{
		name: 'Reviews',
		Component: ReviewsTab,
	},
];
