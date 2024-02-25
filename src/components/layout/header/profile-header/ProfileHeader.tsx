'use client';
import Button from '@/components/ui/button/Button';
import { useCart } from '@/hooks/useCart';
import { useProfile } from '@/hooks/useProfile';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { PiShoppingCartSimpleBold } from 'react-icons/pi';

export function ProfileHeader() {
	const { profile } = useProfile();
	const { items } = useCart();

	return (
		<div className="hidden w-[340-px] items-center text-navbar md:flex md:gap-4 xl:gap-10">
			<button className="hover:text-blue-800">
				<FiSearch />
			</button>
			<Link href={'/cart'} className="relative hover:text-blue-800">
				<PiShoppingCartSimpleBold />
				{!!items.length && (
					<div className="absolute -right-2 -top-2 flex h-3 w-3 items-center justify-center rounded-full bg-primary text-xss text-white duration-300 animate-in fade-in">
						{items.length}
					</div>
				)}
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
