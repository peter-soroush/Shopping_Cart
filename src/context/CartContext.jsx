import React, { createContext, useContext, useReducer } from "react";
import { Children } from "react";
import { sumProducts } from "../Helpers/helper";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  ckeckOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_Item": {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        ...sumProducts(state.selectedItems),
        ckeckOut: false,
      };
    }
    case "Remove_item": {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    }
    case "Increase": {
      const Increaseindex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      // console.log("Increaseindex: ", action.payload.id);
      // console.log("action.payload.id: ", action.payload.id);
      state.selectedItems[Increaseindex].quantity++;
      console.log("state.selectedItems:", state.selectedItems);
      return { ...state, ...sumProducts(state.selectedItems) };
    }
    case "Decrease": {
      const Decreaseindex = state.selectedItems.findIndex(
        (item) => item.id == action.payload.id
      );
      state.selectedItems[Decreaseindex].quantity--;
      return { ...state, ...sumProducts(state.selectedItems) };
    }
    case "CheckOut": {
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        ckeckOut: true,
      };
    }
    default:
      throw new Error("invalid Action");
  }
};
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
