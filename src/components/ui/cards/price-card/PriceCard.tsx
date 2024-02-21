'use client';
import { LiaClock } from 'react-icons/lia';
import Button from '../../button/Button';
import { IoBookOutline } from 'react-icons/io5';
import {
	FaDisplay,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaRedditAlien,
	FaTwitter,
	FaWhatsapp,
	FaYoutube,
} from 'react-icons/fa6';
import { TbClockShield } from 'react-icons/tb';
import { GrCertificate } from 'react-icons/gr';
import Link from 'next/link';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { ICourse } from '@/types/course.interface';
import { useProfile } from '@/hooks/useProfile';
import clsx from 'clsx';

interface IPriceCard {
	language: string;
	course: ICourse;
}
export function PriceCard({ language, course }: IPriceCard) {
	const { profile } = useProfile();
	const { addToCart, removeFromCart } = useActions();
	const { items } = useCart();
	const currentElement = items.find(
		(cartItem) => cartItem.course.id === course.id
	);
	const isInPurchase = profile?.purchases.some(
		(purchase) => purchase.id === course.id
	);

	function cartHandler() {
		if (currentElement) {
			removeFromCart({ id: currentElement.id });
		} else addToCart({ course });
	}
	return (
		<div className="h-[738px] w-[371px] rounded-lg bg-white p-8 shadow-lg">
			<div className="flex items-center justify-center">
				<h1 className="!p-0 text-black">
					$
					{course.sale
						? ((course.price * course.sale) / 100).toFixed(2)
						: course.price.toFixed(2)}
				</h1>
				<h2 className="mb-2 font-normal text-border">
					{course.sale ? `${course.sale}% off ` : ''}
				</h2>
			</div>
			<p className="6l mb-4 flex items-center justify-center gap-4 pb-5 text-[#F68C20]">
				<LiaClock className="text-1.5xl" />
				11 Hours left at this price
			</p>
			<Button
				className={clsx('w-full', {
					['!active:traslate-y-0 !bg-gray-400']: isInPurchase,
				})}
				disabled={isInPurchase}
				onClick={cartHandler}
			>
				{!isInPurchase
					? !currentElement
						? 'Buy now'
						: 'Delete from the cart'
					: 'Already in your purchase'}
			</Button>

			<h2 className="text-center">This course includes</h2>
			<ul className="border-b border-gray-200  text-hero-text">
				<li className="mb-4 flex items-center gap-6">
					<IoBookOutline className="text-green-400" />
					<p>Language - {language}</p>
				</li>
				<li className="mb-4 flex items-center gap-6">
					<FaDisplay className="text-green-400" />
					<p>Use on desktop, tablet, & mobile</p>
				</li>
				<li className="mb-4 flex items-center gap-6">
					<TbClockShield className="text-green-400" />
					<p> Full lifetime access</p>
				</li>
				<li className="mb-4 flex items-center gap-6">
					<GrCertificate className="text-green-400" />
					<p>Certificate of Completion</p>
				</li>
			</ul>
			<div className="border-b border-gray-200 pb-5">
				<p className="py-5 text-md text-black">Training 5 or more people?</p>
				<p className="text-hero-text">
					Get your team access to 3,500+ top courses anytime, Contact our sale
				</p>
			</div>
			<div>
				<p className="py-5 text-md text-black">Share this course</p>
				<div className="flex gap-4">
					<Link
						href="/"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-300 text-1.5xl text-white filter hover:contrast-75"
					>
						<FaInstagram />
					</Link>
					<Link
						href="/"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-300 text-1.5xl text-white filter hover:contrast-75"
					>
						<FaFacebookF />
					</Link>
					<Link
						href="/"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-300 text-1.5xl text-white filter hover:contrast-75"
					>
						<FaWhatsapp />
					</Link>
					<Link
						href="/"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-300 text-1.5xl text-white filter hover:contrast-75"
					>
						<FaTwitter />
					</Link>
					<Link
						href="/"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-300 text-1.5xl text-white filter hover:contrast-75"
					>
						<FaLinkedinIn />
					</Link>
					<Link
						href="/"
						className="flex h-8 w-8 items-center justify-center rounded bg-red-700 text-xl text-white filter hover:contrast-75"
					>
						<FaYoutube />
					</Link>
					<Link
						href="/"
						className="flex h-8 w-8 items-center justify-center rounded bg-gray-300 text-1.5xl text-white filter hover:contrast-75"
					>
						<FaRedditAlien />
					</Link>
				</div>
			</div>
		</div>
	);
}
