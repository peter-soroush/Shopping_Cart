import { MdDeleteOutline } from "react-icons/md";
import React from "react";
import { shortenText } from "../Helpers/helper";
import style from "../Styles/BasketCard.module.css";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../feature/cart/cartSlice";
function BasketCard({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={style.card}>
      <img src={data.image} alt={data.title} />
      <p>{shortenText(data.title)}</p>
      <div className={style.actions}>
        {data.quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}>-</button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => dispatch(increase(data))}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
