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

export { shortenText, searchProducts, catHandeller };
