'use client';
import clsx from 'clsx';
import styles from './Profile.module.scss';
import { IUserProfile } from '@/types/auth.interface';
import { CourseCard } from '@/components/ui/cards/course-card/CourseCard';
import Image from 'next/image';
import Button from '@/components/ui/button/Button';
import { AuthService } from '@/services/auth/auth.service';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export function Profile(profile: IUserProfile) {
	const { push } = useRouter();
	const { mutate: logout } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => AuthService.logout(),
	});

	function logoutHandler() {
		logout();
		push('/auth/login');
	}
	return (
		<section className={clsx('container', styles.background)}>
			<div className="h-auto">
				<div className="mt-24 flex gap-10 ">
					<div>
						<div className="h-64 w-64 overflow-hidden rounded-lg border-[12px] border-white shadow-lg">
							<Image
								src={profile.avatarPath || ''}
								alt={profile.name}
								width={268}
								height={268}
								className="rounded-lg"
							/>
						</div>
					</div>
					<div>
						<div className="flex items-center justify-between gap-4">
							<div className="flex items-center">
								<h2>{profile.name}</h2>
								<span className="mt-4 text-hero-text">illustrator&Artist</span>
							</div>
							<Button onClick={logoutHandler}>Logout</Button>
						</div>

						<p className="text-hero-text">
							Hi, my name is IceDiver. I am a photo artist and art director from
							Munich. Last year I was chosen to be one of the nine Adobe
							Creative Residents in 2019/2020.My pictures are widely known for
							their colorful, surrealistic touch. by books, lyrics and words in
							total, I am able to abstract and visualize them into new artworks.
						</p>
					</div>
				</div>
				<h1 className="mt-20">My purchases ({profile.purchases.length})</h1>
				<div className="relative z-10  mb-20 grid grid-cols-3 gap-7 transition-all duration-1000">
					{profile.purchases.map((course) => (
						<CourseCard
							path={'courses'}
							slug={course.slug}
							images={course.images}
							rating={course.rating || 0}
							views={course.views}
							lessons={course.videos.length}
							title={course.title}
							teacher={course.teacher.name}
							price={course.price}
							sale={49}
							teacherAvatar={course.teacher.avatarPath || ''}
							key={course.title}
							courseId={course.id}
							className={'my-20  shadow-2xl'}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
