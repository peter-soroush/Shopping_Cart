import React from "react";
import { RotatingLines } from "react-loader-spinner";
import style from "../Styles/Loader.module.css";
function Loader() {
  return (
    <div className={style.loader}>
      <RotatingLines
        height="100px"
        width="100px"
        strokeWidth="3"
        color="#fe5d42"
      />
    </div>
  );
}

export default Loader;
