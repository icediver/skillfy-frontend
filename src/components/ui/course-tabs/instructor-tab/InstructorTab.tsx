import Image from 'next/image';
import { ITabsElement } from '../data';
import { FaRegStar } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { FiPlayCircle } from 'react-icons/fi';

export function InstructorTab({ course }: ITabsElement) {
	return (
		<div className="rounded-lg bg-main-background p-8 duration-700 animate-in fade-in">
			<div className="flex gap-8">
				<div className="w-1/5">
					<Image
						src={course?.teacher?.avatarPath || 'https://i.pravatar.cc'}
						alt={course?.teacher?.name}
						width={137}
						height={137}
						className="rounded-lg"
					/>
				</div>
				<div className="w-4/5">
					<h2 className="pt-0">{course?.teacher?.name}</h2>
					<div className="col-span-2  flex w-full items-center gap-8  text-sm [&>div>span]:text-hero-text">
						<div className="col-span-2 flex items-center gap-2.5">
							<FaRegStar className="text-1.25xl text-yellow-500" />
							<span>{4.5}(1,348 ratings)</span>
						</div>

						<div className="flex items-center gap-2.5">
							<IoEyeOutline className="text-1.25xl text-primary" />
							<span>Enrolled {45} students</span>
						</div>

						<div className="flex items-center gap-2.5">
							<FiPlayCircle className="text-1.25xl text-green-600" />
							<span>{36}</span>
							<span>Lessons</span>
						</div>
					</div>
					<p className="my-4 text-hero-text">
						CBE brings you courses that are affordable, current, entertaining
						and based on practical work experience instead of theory.
					</p>
				</div>
			</div>
			<div className="text-hero-text">
				<h3 className="mb-2">
					Adobe Certified Instructor & Adobe Certified Expert
				</h3>
				<p>
					Effortless comfortable full leather lining eye-catching unique detail
					to the toe low ‘cut away’ sides clean and sleek. Polished finish
					elegant court shoe work duty stretchy mid kitten heel this ladylike
					design slingback strap mid kitten heel this ladylike design. Sharing
					is who I am, and teaching is where I am at my best, because I’ve been
					on both sides of that equation, and getting to deliver useful training
					is my meaningful way to be a part of the creative community. I’ve
					spent a long time watching others learn, and teach, to refine how I
					work with you to be efficient, useful and, most importantly,
					memorable. I want you to carry what I’ve shown you into a bright
					future.
				</p>
			</div>
		</div>
	);
}
