import Button from '@/components/ui/button/Button';
import { LuClock9 } from 'react-icons/lu';

interface ICurriculumItems {
	title: string;
	duration: number;
	color: string;
}

export function CurriculumItems({ title, duration, color }: ICurriculumItems) {
	return (
		<div
			style={{ backgroundColor: color }}
			className="mb-4 flex items-center justify-between gap-5 rounded-lg p-5 text-hero-text duration-700 animate-in fade-in"
		>
			<div className="h-[78px] w-[72px] rounded-lg bg-gray-400" />
			<div>
				<h3>{title}</h3>
				<p className="flex items-center gap-3 text-primary">
					<span>Duration</span> <LuClock9 /> {duration}
					<span>week</span>
				</p>
			</div>
			<Button>Try this Pro</Button>
		</div>
	);
}
