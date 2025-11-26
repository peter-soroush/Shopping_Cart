import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import CheckoutPage from "./pages/CheckoutPage";
import PagenotFound from "./pages/404";
import ProductContexts from "./context/ProductContexts";

function App() {
  return (
    <ProductContexts>
      <Routes>
        <Route path="/" element={<Navigate to="/products" />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<DetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<PagenotFound />} />
      </Routes>
    </ProductContexts>
  );
}

export default App;
