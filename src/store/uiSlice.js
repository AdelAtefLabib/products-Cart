import {createSlice} from "@reduxjs/toolkit";

const uiSlice =  createSlice({
	name:'uiSlice ',
	initialState:{
		cartIsVisible : false
	},
	reducers:{
		toggle:(state)=>{
			state.cartIsVisible = !state.cartIsVisible
		}
	}
})
export default uiSlice
export const uiActions = uiSlice.actions
