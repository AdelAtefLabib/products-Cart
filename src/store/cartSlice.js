import { createSlice } from "@reduxjs/toolkit";

const sliceName = "cartSlice";
const cartSlice = createSlice({
  name: sliceName,
  initialState: {
    totalQuantity: 0,
    totalPrice: 0,
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          itemPrice: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.totalQuantity = existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart: (state, action) => {
      const existingItemRemove = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity = state.totalQuantity - 1;
      if (existingItemRemove) {
        if (existingItemRemove.totalQuantity === 1) {
          state.items = state.items.filter(
            (item) => item.id !== existingItemRemove.id
          );
        } else {
          existingItemRemove.quantity = existingItemRemove.quantity -= 1;
          existingItemRemove.totalPrice =
            existingItemRemove.totalPrice - existingItemRemove.itemPrice;
        }
      }
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
