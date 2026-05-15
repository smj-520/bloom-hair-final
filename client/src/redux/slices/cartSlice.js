import { createSlice } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
  if (typeof localStorage !== "undefined") {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }
  return [];
};

const saveCartToStorage = (items) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(items));
  }
};

const initialState = {
  items: getCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item._id === product._id
      );

      if (existingItem) {
        existingItem.qty += product.qty;
      } else {
        state.items.push(product);
      }

      saveCartToStorage(state.items);
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item._id === action.payload
      );

      if (item) {
        item.qty += 1;
      }

      saveCartToStorage(state.items);
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (item) => item._id === action.payload
      );

      if (item) {
        item.qty -= 1;
      }

      state.items = state.items.filter((item) => item.qty > 0);

      saveCartToStorage(state.items);
    },
  },
});

export const { addToCart, increaseQty, decreaseQty } =
  cartSlice.actions;

export default cartSlice.reducer;
