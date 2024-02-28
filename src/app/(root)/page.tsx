import { Home } from '@/components/screen/home/Home';
import { EnumTokens } from '@/services/auth/auth.service';
import { CourseService } from '@/services/course/course.service';
import { cookies } from 'next/headers';
const fetchUser = async () => {
	'use server';

	const cookie = cookies();
	const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value;

	return fetch(`${process.env.SERVER_URL}/users/profile`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	}).then((res) => res.json());
};
async function getCourses() {
	const courses = await CourseService.getAll();
	return courses;
}
export default async function HomePage() {
	const user = await fetchUser();
	const courses = await getCourses();

	return <Home courses={courses} />;
}
