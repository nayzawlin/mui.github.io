import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import postReducer from "./features/postSlice";

export const store = configureStore({
	reducer: {
		post: postReducer,
		cart: cartReducer,
	}
})