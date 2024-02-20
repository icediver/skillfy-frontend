import Layout from '@/app/(root)/layout';
import { ShopingCart } from '@/components/screen/shoping-cart/ShopingCart';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Cart',
	description: '',
};

export default function CartPage() {
	return <ShopingCart />;
}
