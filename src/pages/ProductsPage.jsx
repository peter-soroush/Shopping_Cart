import React, { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { useProducts } from "../context/ProductContexts";
import style from "../Styles/ProductsPage.module.css";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { catHandeller, searchProducts } from "../Helpers/helper";

function ProductsPage() {
  const products = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  useEffect(() => {
    let finalProducts = catHandeller(
      searchProducts(products, query.search),
      query.category
    );

    console.log({ finalProducts });
    setDisplayed(finalProducts);
  }, [query]);

  const searchHandeller = () => {
    setQuery((query) => ({ ...query, search }));
  };

  const categoryHandeller = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => ({ ...query, category }));
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandeller}>
          <ImSearch />
        </button>
      </div>
      <div className={style.container}>
        <div className={style.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
          <ul onClick={categoryHandeller}>
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default ProductsPage;
