import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  //reducer function , state= initialState, action happens on payload ading item in cart
  reducers: {
    // dont return anything in this, take state and modify it
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //  remove item by their ID
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item === action.payload);
      if (item && item.length > 1) {
        item.quantity -= 1;
        // or  item.quantity= item.quantity-1
      }
    },

    clearCart: (state) => {
      // no need of sction as making array empty
      state.items = [];
    },
  },
});
//also need to export actions
export const {
  addItems,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
//will export only one which needed thats why reducer that component needed not reducers
