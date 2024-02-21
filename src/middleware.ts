import { NextRequest, NextResponse } from 'next/server';
import { EnumTokens } from './services/auth/auth.service';
import { IUserProfile } from './types/auth.interface';
import { API_URL } from './config/api.config';

export async function middleware(request: NextRequest, response: NextResponse) {
	const refreshToken = request.cookies.get(EnumTokens.REFRESH_TOKEN)?.value;
	const accessToken = request.cookies.get(EnumTokens.ACCESS_TOKEN)?.value;

	try {
		const user: IUserProfile = await fetch(`${API_URL}/users/profile`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${accessToken}`,
			},
		})
			// .then((res) => (res.ok ? res : Promise.reject(res)))
			.then((data) => {
				return data.json();
			})
			.catch(() => {
				console.log('Error');
			});

		if (!user.name) {
			return NextResponse.rewrite(new URL('/auth/register', request.url));
		}

		if (request.nextUrl.pathname.startsWith('/courses')) {
			const slug = request.nextUrl.pathname.split('/')[2];
			const isCourseInPurchase = user.purchases.some(
				(course) => course.slug === slug
			);
			if (!isCourseInPurchase)
				return NextResponse.rewrite(
					new URL(`/course-overview/${slug}`, request.url)
				);
		}

		return NextResponse.next();
	} catch (error) {
		return new Response('Error proccessing request', { status: 500 });
	}
}

export const config = {
	matcher: ['/profile', '/courses/:pathname*'],
};
