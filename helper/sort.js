export const sortData = (
  type,
  selectedSort,
  selectedCategory,
  data,
  allProducts
) => {
  let sorted = [];
  const getValue = ({ price }) => +price.slice(1) || 0;

  const sorter = (change) => {
    if (selectedSort === "Best Sellers") {
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

  if (type === "categories") {
    switch (selectedCategory) {
      case "All Products":
        sorter(data);
        break;
      case "Cream Glue Phone Cases":
        sorter(data.cgCases);
        break;
      case "Epoxy Phone Cases":
        sorter(data.eCases);
        break;
      case "Hair Clips":
        sorter(data.hairClips);
        break;
      case "Car Accessories":
        sorter(data.carAcc);
        break;
      case "Custom":
        sorter(data.other);
        break;
      default:
        sorter(allProducts);
        break;
    }
  } else if (type === "collections") {
    switch (selectedCategory) {
      case "PopMart":
        sorter(data.filter((each) => each.collection === "PopMart"));
        break;
      case "zZton":
        sorter(data.filter((each) => each.collection === "zZton"));
        break;
      case "Rico":
        sorter(data.filter((each) => each.collection === "Rico"));
        break;
      case "Sanori":
        sorter(data.filter((each) => each.collection === "Sanori"));
        break;
      case "Anime":
        sorter(data.filter((each) => each.collection === "Anime"));
        break;
      default:
        break;
    }
  } else {
    sorter(data);
  }

  return sorted;
};
