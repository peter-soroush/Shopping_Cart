import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContexter = createContext();
function ProductContexts({ children }) {
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

  return (
    <ProductContexter.Provider value={products}>
      {children}
    </ProductContexter.Provider>
  );
}

const useProducts = () => {
  const products2 = useContext(ProductContexter);
  return products2;
};
export default ProductContexts;
export { useProducts };
