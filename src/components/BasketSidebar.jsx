import React from "react";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";
import style from "../Styles/BasketSideBar.module.css";
function BasketSidebar({ state, clickHandeler }) {
  console.log(state.quantity);
  return (
    <div className={style.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button onClick={() => clickHandeler("CheckOut")}>Checkout</button>
    </div>
  );
}

export default BasketSidebar;
