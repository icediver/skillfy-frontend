import { CurriculumItems } from './curriculum-items/CurriculumItems';

export function CurriculumTab() {
	return (
		<div>
			{['#FEF9E5', '#F4F9FD', '#ECF9F7', '#FEF0EF'].map((color, index) => (
				<CurriculumItems
					key={index}
					title="Everything You Need to know Business"
					duration={10}
					color={color}
				/>
			))}
		</div>
	);
}
