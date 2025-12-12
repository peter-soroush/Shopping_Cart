import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { productQantity, shortenText } from "../Helpers/helper";
import style from "../Styles/Card.module.css";
// import { useCart } from "../context/CartContext";
function Card({ data }) {
  const { id, title, image, price } = data;
  // const [state, dispatch] = useCart();
  // const quantity = productQantity(state, id);
  const quantity = 0;

  const clickHandeller = (type) => {
    // dispatch({ type, payload: data });
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
          {quantity === 1 && (
            <button onClick={() => clickHandeller("Remove_item")}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => clickHandeller("Decrease")}>-</button>
          )}
          {quantity > 0 && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => clickHandeller("Add_Item")}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => clickHandeller("Increase")}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
