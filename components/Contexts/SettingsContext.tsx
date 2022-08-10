import React, { useState, createContext, useContext, useEffect } from "react";
import { products } from "../../data/products";
import { sortData } from '../../helper/sort';
import { categories } from "../../data/categories";
import { collections } from "../../data/collections";
import { useRouter } from "next/router";

export const SettingsContext = createContext({
  isMobile: false,
  setIsMobile: (isMobile: boolean) => { },
  currentPage: 'home',
  setCurrentPage: (page: string) => { },
  anchorEl: null,
  setAnchorEl: (el: any) => { },
  selectedCategory: "All Products",
  setSelectedCategory: (category: string) => { },
  productsToShow: [],
  setProductsToShow: (data: any) => { },
  selectedSort: 'Best Sellers',
  setSelectedSort: (sort: string) => { },
  searchQuery: '',
  setQuery: (query: string) => { }
});

export const SettingsProvider = ({ children }) => {
  const { query } = useRouter();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>('All Products');
  const [productsToShow, setProductsToShow] = useState<any>([]);
  const [selectedSort, setSelectedSort] = useState<string>("Best Sellers");
  const [searchQuery, setQuery] = useState<string>("");
  const [allProducts, setAllProducts] = useState<any>([]);
  const categoriesSet = new Set(categories.map(cat => cat.name));
  const collectionsSet = new Set(collections.map(col => col.name));

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const all: any = [];
    for (let category in products) {
      for (let items of products[category]) {
        all.push(items);
      }
    }

    setAllProducts(all);
    if (query.category) {
      setSelectedCategory(query.category);
    } else if (query.collection) {
      setSelectedCategory(query.collection);
    } else {
      setSelectedCategory('');
    }

  }, []);

  const store = {
    isMobile: isMobile,
    setIsMobile: (isMobile: boolean) => {
      setIsMobile(isMobile);
    },
    currentPage: currentPage,
    setCurrentPage: (currentPage: string) => {
      setCurrentPage(currentPage);
    },
    anchorEl: anchorEl,
    setAnchorEl: (el: any) => {
      setAnchorEl(el);
    },
    selectedCategory: selectedCategory,
    setSelectedCategory: (category: string) => {
      setSelectedCategory(category);
    },
    productsToShow: productsToShow,
    setProductsToShow: (data: any) => {
      setProductsToShow(data);
    },
    selectedSort: selectedSort,
    setSelectedSort: (sort: string) => {
      setSelectedSort(sort);
    },
    searchQuery: searchQuery,
    setQuery: (query: string) => {
      setQuery(query);
    }
  };

  const filterQuery = () => {
    if (query.results) {
      let temp = allProducts.slice();
      temp = temp.filter((product) => {
        let q = typeof query.results === "string" ? query.results.toLowerCase() : "";
        const name = product.title.toLowerCase();
        const collection = product.collection.toLowerCase();
        const category = product.category.toLowerCase();
        if (name.includes(q) || collection.includes(q) || category.includes(q)) {
          return true;
        } else {
          return false;
        }
      })
      setProductsToShow(temp);
    }
  }

  useEffect(() => {
    const home = document.getElementById('nav1');
    const products = document.getElementById('nav2-text');
    const faq = document.getElementById('nav3');
    const contact = document.getElementById('nav4');

    home?.classList.remove('active-nav');
    products?.classList.remove('active-nav');
    faq?.classList.remove('active-nav');
    contact?.classList.remove('active-nav');

    if (currentPage === 'home') {
      home?.classList.add('active-nav');
    } else if (currentPage === 'products') {
      products?.classList.add('active-nav');
    } else if (currentPage === 'faq') {
      faq?.classList.add('active-nav');
    } else if (currentPage === 'contact') {
      contact?.classList.add('active-nav');
    }

    setAnchorEl(null);
    filterQuery();
  }, [currentPage, query])

  useEffect(() => {
    if (categoriesSet.has(selectedCategory)) {
      setProductsToShow(sortData('categories', selectedSort, selectedCategory, products, allProducts));
    } else if (collectionsSet.has(selectedCategory)) {
      setProductsToShow(sortData('collections', selectedSort, selectedCategory, allProducts, allProducts));
    } else if (selectedCategory === "") {
      if (query.results) setProductsToShow(sortData('categories', selectedSort, selectedCategory, productsToShow, allProducts));
      else setProductsToShow(sortData('all', selectedSort, selectedCategory, allProducts, allProducts));
    }
  }, [selectedSort, selectedCategory])

  useEffect(() => {
    console.log('Show:', productsToShow);
  }, [productsToShow])

  return (
    <SettingsContext.Provider value={store}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
