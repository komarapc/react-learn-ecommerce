import { CartProps } from "@/interface/product";
import { RootState } from "../store/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartProps[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }: { payload: CartProps }) => {
      state.push(payload);
    },
    removeFromCart: (state, { payload }: { payload: { index: number } }) => {
      state.splice(payload.index, 1);
    },
    updateQuantity: (
      state,
      { payload }: { payload: { index: number; quantity: number } }
    ) => {
      state[payload.index].quantity = payload.quantity;
      if (state[payload.index].quantity === 0) state.splice(payload.index, 1);
    },
    increaseQuantity: (state, { payload }: { payload: { index: number } }) => {
      state[payload.index].quantity++;
    },
    reduceQuantity: (state, { payload }: { payload: { index: number } }) => {
      state[payload.index].quantity--;
      // if quantity is 0, remove from cart
      if (state[payload.index].quantity === 0) {
        state.splice(payload.index, 1);
      }
    },
    clearCart: () => {
      return initialState;
    },
  },
  selectors: {
    cartTotal: (state) => {
      return state.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  reduceQuantity,
  updateQuantity,
} = cartSlice.actions;

export const { cartTotal } = cartSlice.selectors;

export const useSelectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
