import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import {
	IAddToCartPayload,
	ICartInitialState,
	IChangeQuantityPayload,
} from './cart.types';

const initialState: ICartInitialState = {
	items: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const isExist = state.items.some(
				(item) => item.course.id === action.payload.course.id
			);

			if (!isExist)
				state.items.push({ ...action.payload, id: state.items.length });
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
		},

		reset: (state) => {
			state.items = [];
		},
	},
});
