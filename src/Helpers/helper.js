const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().trim().includes(search)
  );
  return searchedProducts;
};

const catHandeller = (products, category) => {
  if (!category || category === "all") return products;
  const filteredProducts = products.filter((p) => p.category == category);
  return filteredProducts;
};

const queryOptimizer = (curQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = curQuery;

    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = curQuery;

    return rest;
  }

  return { ...curQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) query.category = category;
  if (search) query.search = search;
  return query;
};

const sumPrice = (products) => {
  return products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
};
const sumQuan = (products) => {
  return products.reduce((acc, cur) => acc + cur.quantity, 0);
};

const productQantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);
  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};

export {
  shortenText,
  searchProducts,
  catHandeller,
  queryOptimizer,
  getInitialQuery,
  sumPrice,
  sumQuan,
  productQantity,
};
