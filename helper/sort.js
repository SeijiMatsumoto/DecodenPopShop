import { categories } from "../data/categories";
import { collections } from "../data/collections";

export const sortData = (selectedCategory, selectedSort, data) => {
  const categoriesSet = new Set(categories.map((cat) => cat.name));
  const collectionsSet = new Set(collections.map((col) => col.name));

  let sorted = [];
  const getValue = ({ price }) => +price.slice(1) || 0;

  const sorter = (change) => {
    if (selectedSort === "Relevance") {
      sorted = change.slice();
    } else if (selectedSort === "Price Low to High") {
      sorted = change.sort((a, b) => getValue(a) - getValue(b)).slice();
    } else if (selectedSort === "Price High to Low") {
      sorted = change.sort((a, b) => getValue(b) - getValue(a)).slice();
    } else if (selectedSort === "A to Z") {
      sorted = change.sort((a, b) => a.title.localeCompare(b.title)).slice();
    } else if (selectedSort === "Z to A") {
      sorted = change.sort((a, b) => b.title.localeCompare(a.title)).slice();
    }
  };

  if (categoriesSet.has(selectedCategory)) {
    sorter(data.filter((product) => product.category === selectedCategory));
  } else if (collectionsSet.has(selectedCategory)) {
    sorter(data.filter((product) => product.collection === selectedCategory));
  } else if (selectedCategory === "") {
    sorter(data);
  }

  return sorted;
};
