import {createSlice} from "@reduxjs/toolkit";

createSlice({
	name:'productsSlice' , initialState:{
		items:[]
	},reducers:{
		getAll:(state)=>{
			return state.items
		}
	}
})
