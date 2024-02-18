'use client';
import Button from '@/components/ui/button/Button';
import { UserService } from '@/services/user.service';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';

export function ProfileHeader() {
	const { data: profile } = useQuery({
		queryKey: ['profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
	});

	return (
		<div className="flex w-[340-px] items-center gap-10 text-navbar">
			<button className="hover:text-blue-800">
				<FiSearch />
			</button>
			<Link href={'/cart'} className="hover:text-blue-800">
				<PiShoppingCartSimpleBold />
			</Link>
			{!profile ? (
				<Link href={'/auth/register'}>
					<Button>Register</Button>
				</Link>
			) : (
				<Link className="flex items-center gap-5" href={'/profile'}>
					<Image
						src={profile.avatarPath || '/images/avatar.png'}
						alt="logo"
						width={42}
						height={42}
						className="rounded-full"
					/>
					<p className="overflow-hidden">{profile.name}</p>
					<FaChevronDown size={12} />
				</Link>
			)}
		</div>
	);
}
