import React from "react";
// import { useCart } from "../context/CartContext";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { Link } from "react-router-dom";
import store from "../app/store";
import style from "../Styles/CheckoutPage.module.css";
import { useSelector } from "react-redux";

function CheckoutPage() {
  const state = useSelector((store) => store.cart);

  if (!state.itemsCounter)
    return (
      <div className={style.container}>
        <p>Cart is Empty</p>
        <Link to="/">Back to Shop</Link>
      </div>
    );
  return (
    <div className={style.container}>
      <BasketSidebar state={state} />
      <div className={style.products}>
        {state.selectedItems.map((p) => (
          <BasketCard key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
