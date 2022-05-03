import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { current, cart } = action.payload;
			let result = cart.find(i => i.id === current.id);
			result ? state.push({...current, id: nanoid()}) : state.push(current);
		},
		removeFromCart: (state, action) => {
			const { current, cart } = action.payload;
			let result = cart.filter(i => i.id !== current.id);
			return result
		}
	}
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer