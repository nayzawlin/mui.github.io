import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		add: (state, action) => {
			let obj;
			obj = {
				id: nanoid(),
				url: action.payload ? action.payload : 'https://media.comicbook.com/files/img/default-movie.png'
			}
			state.push(obj)
		}
	}
})

export const { add } = postSlice.actions;

export default postSlice.reducer