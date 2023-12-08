import cartReducer from "../reducer/cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from "../reducer/purchseReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    purchase: purchaseReducer,
  },
  devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
