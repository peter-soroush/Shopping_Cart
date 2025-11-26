import React from "react";
import { queryOptimizer } from "../Helpers/helper";
import { FaListUl } from "react-icons/fa";

import style from "../Styles/SideBar.module.css";
import { categories } from "../constant/List";
function Sidebar({ setQuery, query }) {
  const categoryHandeller = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    setQuery((query) => queryOptimizer(query, { category }));
  };

  return (
    <div className={style.sidebar}>
      <div>
        <FaListUl />
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandeller}>
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLocaleLowerCase() === query.category
                ? style.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
