import { useTypedSelector } from './useTypedSelector';

export const useCart = () => {
	const items = useTypedSelector((state) => state.cart.items);
	const total = items.reduce((acc, prev) => {
		const { price, sale } = prev.course;
		const newPrice = sale ? (price * sale) / 100 : price;
		return newPrice + acc;
	}, 0);
	return { items, total };
};
