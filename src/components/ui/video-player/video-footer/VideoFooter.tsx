import {
	MdOutlineArrowDownward,
	MdOutlineKeyboardArrowDown,
	MdOutlineStickyNote2,
} from 'react-icons/md';
import CourseButton from '../../course-button/CourseButton';
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { LuCalendarDays } from 'react-icons/lu';

export function VideoFooter() {
	return (
		<footer className="relative  z-30 flex w-full items-center justify-between bg-white py-4">
			<div className="flex gap-6">
				<CourseButton variant="primary">
					<MdOutlineStickyNote2 />
					<p>Save note</p>
				</CourseButton>
				<CourseButton variant="secondary">
					<BiMessageRoundedDetail />
					<p>Discussion</p>
				</CourseButton>
				<CourseButton variant="third">
					<LuCalendarDays />
					<p>Add to calendar</p>
				</CourseButton>
			</div>
			<div className="flex gap-6">
				<CourseButton variant="fourth">
					<MdOutlineArrowDownward />
					<p>Download</p>
				</CourseButton>

				<CourseButton variant="fifth">
					<p>English</p>
					<MdOutlineKeyboardArrowDown />
				</CourseButton>
				<CourseButton variant="third">
					<p>Refer & Earn</p>
				</CourseButton>
			</div>
		</footer>
	);
}
