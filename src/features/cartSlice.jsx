import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { current, cart } = action.payload;

			let obj = cart.find(i => i.id === current.id);
			console.log('obj', obj);
			console.log('current', current);
			obj ? alert('This poster is already added') : state.push(current);
		}
	}
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer