import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../Helpers/helper";
import style from "../Styles/Card.module.css";
import { useCart } from "../context/CartContext";
function Card({ data }) {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();
  const clickHandeller = () => {
    dispatch({ type: "add", payload: data });
  };

  return (
    <div className={style.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price}$</p>
      <div className={style.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button onClick={clickHandeller}>
            <TbShoppingBagCheck />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
