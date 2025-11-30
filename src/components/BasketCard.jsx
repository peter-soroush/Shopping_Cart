import { MdDeleteOutline } from "react-icons/md";
import React from "react";
import { shortenText } from "../Helpers/helper";
import style from "../Styles/BasketCard.module.css";
function BasketCard({ data, clickHandeler }) {
  return (
    <div className={style.card}>
      <img src={data.image} alt={data.title} />
      <p>{shortenText(data.title)}</p>
      <div className={style.actions}>
        {data.quantity === 1 && (
          <button onClick={() => clickHandeler("Remove_item", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {data.quantity > 1 && (
          <button onClick={() => clickHandeler("Decrease", data)}>-</button>
        )}
        <span>{data.quantity}</span>
        <button onClick={() => clickHandeler("Increase", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
