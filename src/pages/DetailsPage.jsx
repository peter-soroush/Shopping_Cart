import React from "react";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import { Link, useParams } from "react-router-dom";
import { useProductDetails } from "../context/ProductContexts";
import Loader from "../components/Loader";
import { shortenText } from "../Helpers/helper";
import style from "../Styles/DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const productDetails = useProductDetails(id);

  if (!productDetails) return <Loader />;

  return (
    <div className={style.container}>
      <img src={productDetails.image} alt={shortenText(productDetails.title)} />
      <div className={style.information}>
        <h3>{productDetails.title}</h3>
        <p className={style.description}>{productDetails.description}</p>
        <p className={style.category}>
          <SiOpenproject />
          <Link
            to={`/products?category=${productDetails.category.toLowerCase()}`}
          >
            {productDetails.category}
          </Link>
        </p>
        <div className={style.foot}>
          <span className={style.price}>
            <IoMdPricetag />
            {productDetails.price}$
          </span>

          <Link to="/">
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
