import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuan } from "../../Helpers/helper";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  ckeckOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        state.total = sumPrice(state.selectedItems);
        state.itemsCounter = sumQuan(state.selectedItems);
        state.ckeckOut = false;
      }
    },
    removeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuan(state.selectedItems);
    },
    increase: (state, action) => {
      const Increaseindex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[Increaseindex].quantity++;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuan(state.selectedItems);
    },
    decrease: (state, action) => {
      const decreaseindex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[decreaseindex].quantity--;
      state.total = sumPrice(state.selectedItems);
      state.itemsCounter = sumQuan(state.selectedItems);
    },
    checkout: (state) => {
      state.selectedItems = [];
      state.ckeckOut = true;
      state.total = 0;
      state.itemsCounter = 0;
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increase, decrease, checkout } =
  cartSlice.actions;
