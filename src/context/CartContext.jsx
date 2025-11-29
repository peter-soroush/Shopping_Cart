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
    case "add":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantitiy: 1 });
      }
      return {
        selectedItems: [...state.selectedItems],
        ckeckOut: false,
        ss: sumProducts(),
      };

    default:
      throw new Error("invalid Action");
  }
};
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
