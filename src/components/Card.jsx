import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { productQantity, shortenText } from "../Helpers/helper";
import style from "../Styles/Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import store from "../app/store";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../feature/cart/cartSlice";

function Card({ data }) {
  const dispatch = useDispatch();
  const { id, title, image, price } = data;
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);
  const quantity = productQantity(state, id);

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
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}
          {quantity > 0 && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
