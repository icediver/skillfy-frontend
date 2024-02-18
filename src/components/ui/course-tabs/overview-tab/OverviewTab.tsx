import { ICourse } from '@/types/course.interface';
import { HTMLAttributes } from 'react';
import { ITabsElement } from '../data';

export function OverviewTab({ course }: ITabsElement) {
	return (
		<div className="duration-700 animate-in fade-in">
			<h2>Course Description</h2>
			<p>{course?.description.slice(0, 200)}...</p>
			<h2>Certification</h2>
			<p>
				Effortless comfortable full leather lining eye-catching unique detail to
				the toe low ‘cut-away’ sides clean and sleek. Polished finish elegant
				court shoe work duty stretchy slingback strap mid kitten heel this
				ladylike design slingback strap mid kitten heel this ladylike design.
			</p>
			<h2>Who this course is for</h2>
			<p>
				Anyone interested in learning about business (only practical concepts
				that you can use and no boring theory + we won’t cover business topics
				that are common sense
			</p>
		</div>
	);
}
