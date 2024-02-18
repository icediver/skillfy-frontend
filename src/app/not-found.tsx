import type { Metadata } from 'next';
import Layout from './(root)/layout';
import Image from 'next/image';
import pattern from '@/assets/image/Pattern.png';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Not found',
	description: '',
};

export default function Page() {
	return (
		<Layout params={{ variant: 'secondary' }}>
			<div className="flex h-[1071px] w-full flex-col items-center justify-start">
				<div className="relative w-full bg-main-background">
					<Image
						src={pattern}
						alt="pattern"
						className="absolute right-2 top-3 opacity-30"
					/>
					<div className="mx-auto flex h-[279px] w-[1170px] items-center justify-between">
						<p className="text-1.5xl font-medium ">Not found</p>
						<p className="">
							<Link href={'/'}>Home</Link> / 404
						</p>
					</div>
				</div>
				<p className="p-10 text-1.5xl font-medium">Page not found</p>
				<p className="text-hero-text">
					The Page You Are Attempting To Reach Is Currently Not Available. This
					May Be Because The Page Does Not Exist Or Has Been Moved.
				</p>
				<Link
					href={'/'}
					className="my-8 rounded bg-primary px-3 py-1.5 text-white filter hover:contrast-75 active:translate-y-1"
				>
					Back to Home
				</Link>
				<Image
					src={'/uploads/images/not-found.png'}
					alt="not-found"
					width={893}
					height={724}
					className="rounded-2xl "
				/>
			</div>
		</Layout>
	);
}
