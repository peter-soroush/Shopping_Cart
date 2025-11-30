import React from "react";
import { Link } from "react-router-dom";
import { PiShoppingBagBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import style from "../Styles/Layout.module.css";
function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={style.header}>
        <Link to="/">Soroush Shop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingBagBold />
            {!!(state.itemCounter > 0) && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={style.footer}>
        <p>
          Developed By{" "}
          <Link
            to="https://arsoroush.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            Soroush
          </Link>{" "}
        </p>
      </footer>
    </>
  );
}

export default Layout;
