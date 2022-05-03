import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { id, list } = action.payload;
			let obj = list.find(i => i.id === id);
			state.push(obj);
		}
	}
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer