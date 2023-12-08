import { CartProps } from "@/interface/product";
import { UserProps } from "@/interface/user";
import { createSlice } from "@reduxjs/toolkit";
import { generateId } from "@/utils/generateId";

type PurchaseProps = {
  id: string;
  date?: Date | string;
  purchaseItems: CartProps[];
  user: UserProps;
};

const initialState: PurchaseProps = {
  id: "",
  purchaseItems: [],
  user: {} as UserProps,
  date: "",
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    addToPurchase: (state, { payload }: { payload: CartProps[] }) => {
      state.purchaseItems = payload;
      state.id = generateId();
      state.date = new Date();
    },
    addUserInfo: (state, { payload }: { payload: UserProps }) => {
      state.user = payload;
    },
    clearPurchase: () => {
      return initialState;
    },
  },
  selectors: {
    getPurchaseItems: (state) => state.purchaseItems,
    getPurchaseId: (state) => state.id,
    getPurchaseDate: (state) => state.date,
    getUser: (state) => state.user,
    getPurchase: (state) => state,
    totalPurchase: (state) => {
      return state.purchaseItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
    },
  },
});

export const { addToPurchase, addUserInfo, clearPurchase } =
  purchaseSlice.actions;

export const {
  getPurchaseDate,
  getPurchaseId,
  getPurchaseItems,
  getUser,
  getPurchase,
  totalPurchase,
} = purchaseSlice.selectors;

export default purchaseSlice.reducer;
