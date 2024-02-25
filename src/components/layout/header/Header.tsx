'use client';
import { Logo } from '@/components/ui/logo/Logo';

import { Navbar } from './navbar/Navbar';
import { ProfileHeader } from './profile-header/ProfileHeader';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import clsx from 'clsx';
import { useState } from 'react';

interface IHeader {
	variant?: 'primary' | 'secondary';
}

export function Header({ variant = 'primary' }: IHeader) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);
	return (
		<div
			className={clsx('relative z-50 py-9', {
				['bg-main-background']: variant === 'primary',
				['bg-white']: variant === 'secondary',
			})}
		>
			<section className="container  flex w-full items-center justify-between px-4 xl:w-[1170px] xl:px-0">
				<Logo />
				<Navbar />
				<button
					onClick={() => setIsNavbarOpen(!isNavbarOpen)}
					className="flex items-center rounded border-2 border-primary px-3 py-2 text-primary hover:border-violet-700 hover:text-violet-900 md:hidden"
				>
					{!isNavbarOpen ? (
						<HiBars3 className="h-5 w-5" />
					) : (
						<HiXMark className="h-5 w-5" />
					)}
				</button>
				<ProfileHeader />
			</section>
		</div>
	);
}
