'use client';
import clsx from 'clsx';

import styles from './ShopingCart.module.scss';
import { useCart } from '@/hooks/useCart';
import { CartItem } from './cart-item/CartItem';
import Button from '@/components/ui/button/Button';
import { EnterCoupon } from '@/components/ui/enter-coupon/EnterCoupon';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserService } from '@/services/user.service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/navigation';
import { middleware } from '../../../middleware';

export function ShopingCart() {
	const queryClient = useQueryClient();
	const [isCheckout, setIsCheckout] = useState(false);
	const { push } = useRouter();
	const { reset } = useActions();
	const { items, total } = useCart();
	const [value, setValue] = useState({});

	const { mutate: buyCourses } = useMutation({
		mutationKey: ['by course'],
		mutationFn: () =>
			UserService.buyCourses(items.map((item) => item.course.id)),
		onSuccess: () => {
			toast.success('Courses bought');
			queryClient.invalidateQueries({ queryKey: ['get profile'] });
			reset();
			push('/');
		},
		onError: () => {
			toast.error('Something went wrong');
		},
	});

	const price = items.reduce((acc, prev) => prev.course.price + acc, 0);

	function payHandler() {
		buyCourses();
	}

	function onChageHandler(e: React.ChangeEvent<HTMLInputElement>) {
		setValue((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	}

	return (
		<section className={clsx('container h-screen', styles.background)}>
			<h1 className="py-8 text-black">Shopping Cart</h1>
			<div className="flex gap-8">
				<div className="w-[850px]">
					{items.map((item) => (
						<CartItem
							course={item.course}
							id={item.id}
							key={item.course.title}
						/>
					))}
				</div>
				<div
					className={clsx(
						'mt-3 flex w-[300px] flex-col  rounded-lg bg-[#FEF0EF] p-6 shadow-xl',
						!isCheckout ? '!h-[290px]' : 'h-[490px]'
					)}
				>
					<h2 className="pt-0">Cart totals</h2>
					{!isCheckout ? (
						<>
							<div className="flex items-center justify-between">
								<span className="text-1.5xl font-medium">
									${total.toFixed(2)}
								</span>
								<p className="text-gray-400">
									<span className="line-through">{price.toFixed(2)}</span>
									&nbsp;{price ? Math.round((1 - total / price) * 100) : 0}% Off
								</p>
							</div>
							<Button className="mb-4 mt-8" onClick={() => setIsCheckout(true)}>
								Check Out
							</Button>
							<EnterCoupon />
						</>
					) : (
						<div className="text-hero-text duration-700 animate-in fade-in">
							<Image
								src={'/uploads/images/cards.png'}
								alt={'cards'}
								width={300}
								height={80}
								className="mb-3"
							/>
							<input
								type="text"
								name="cardName"
								placeholder="Name of card"
								className="my-2 w-full rounded border py-2 pl-6 outline-none"
								onChange={onChageHandler}
							/>

							<input
								type="text"
								name="cardNumber"
								placeholder="Card number"
								className="my-2 w-full rounded border py-2 pl-6 outline-none"
								onChange={onChageHandler}
							/>
							<input
								type="text"
								name="expirationDate"
								placeholder="Expiration date"
								className="my-2 w-full rounded border py-2 pl-6 outline-none"
								onChange={onChageHandler}
							/>
							<input
								type="text"
								name="securityCode"
								placeholder="Security code"
								className="my-2 w-full rounded border py-2 pl-6 outline-none"
								onChange={onChageHandler}
							/>
							<div className="flex items-center justify-between">
								<p className="text-1.5xl font-medium">Total: </p>
								<span className="text-1.5xl font-medium">${total}</span>
							</div>
							<Button className="mb-4 mt-3 w-full" onClick={payHandler}>
								Pay now
							</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
