import { Profile } from '@/components/screen/profile/Profile';
import { API_URL } from '@/config/api.config';
import { EnumTokens } from '@/services/auth/auth.service';
import { IUserProfile } from '@/types/auth.interface';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
	title: 'Profile',
	description: 'Profile',
};

const fetchUser = async () => {
	'use server';

	const cookie = cookies();
	const accessToken = cookie.get(EnumTokens.ACCESS_TOKEN)?.value;

	return fetch(`${API_URL}/users/profile`, {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	}).then((res) => res.json()) as Promise<IUserProfile>;
};

export default async function Page() {
	const profile = await fetchUser();

	return <Profile {...profile} />;
}
