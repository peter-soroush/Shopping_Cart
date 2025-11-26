import React, { useEffect, useState } from "react";

import { useProducts } from "../context/ProductContexts";
import style from "../Styles/ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import {
  catHandeller,
  getInitialQuery,
  queryOptimizer,
  searchProducts,
} from "../Helpers/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Sidebar from "../components/Sidebar";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, SetSearchParams] = useSearchParams();

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    SetSearchParams(query);
    setSearch(query.search);
    let finalProducts = catHandeller(
      searchProducts(products, query.search),
      query.category
    );
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

      <div className={style.container}>
        <div className={style.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <Sidebar setQuery={setQuery} query={query} />
      </div>
    </>
  );
}
export default ProductsPage;
