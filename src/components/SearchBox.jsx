import React from "react";
import { queryOptimizer } from "../Helpers/helper";
import { ImSearch } from "react-icons/im";

import style from "../Styles/SearchBox.module.css";
function SearchBox({ search, setSearch, setQuery }) {
  const searchHandeller = () => {
    setQuery((query) => queryOptimizer(query, { search }));
  };

  return (
    <div className={style.search}>
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
  );
}

export default SearchBox;
