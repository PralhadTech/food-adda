import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // Remove item by ID
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

export const {
  addItems,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
