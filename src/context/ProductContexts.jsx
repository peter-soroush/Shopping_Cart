import React, { createContext, useEffect, useState } from "react";
import api from "../services/config";
const ProductContexter = createContext();
function ProductContexts(children) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return <ProductContexter.Provider>{children}</ProductContexter.Provider>;
}

export default ProductContexts;
