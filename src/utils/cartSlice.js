import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  //   reducer function , state= initialState, action happens on payload ading item in cart
  reducers: {
    // dont return anything in this, take state and modify it
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // removing last item write logic to remove item by their ID
      state.items.pop();
    },
    clearCart: (state) => {
      // no need of sction as making array empty
      state.items = [];
    },
  },
});
//also need to export actions
export const { addItems, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
//will export only one which needed thats why reducer that component needed not reducers
