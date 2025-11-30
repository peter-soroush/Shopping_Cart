import React from "react";
import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import { Link } from "react-router-dom";
import style from "../Styles/BasketCard.module.css";
function CheckoutPage() {
  const [state, dispatch] = useCart();
  const clickHandeler = (type, data) => {
    dispatch({ type, payload: data });
  };

  if (!state.itemCounter)
    return (
      <div className={style.EmptyCart}>
        <p>Cart is Empty</p>
        <Link to="/">Back to Shop</Link>
      </div>
    );
  return (
    <div>
      <div>
        {state.selectedItems.map((p) => (
          <BasketCard key={p.id} data={p} clickHandeler={clickHandeler} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
