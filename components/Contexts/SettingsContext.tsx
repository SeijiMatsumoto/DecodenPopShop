import React, { useState, createContext, useContext, useEffect } from "react";
import { products } from "../../data/products";
import { sortData } from '../../helper/sort';
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
  setQuery: (query: string) => { },
  selectedProduct: '',
  setSelectedProduct: (productId: string) => { },
  fromProducts: false,
  setFromProducts: (from: boolean) => { }
});

export const SettingsProvider = ({ children }) => {
  const { query } = useRouter();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [screenWidth, setWidth] = useState<number>(1000);
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<any>('All Products');
  const [productsToShow, setProductsToShow] = useState<any>([]);
  const [selectedSort, setSelectedSort] = useState<string>("Best Sellers");
  const [searchQuery, setQuery] = useState<string>("");
  const [allProducts, setAllProducts] = useState<any>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [fromProducts, setFromProducts] = useState<boolean>(false);

  const onResize = () => { setWidth(window.innerWidth); }

  useEffect(() => {
    if (screenWidth < 1300) {
      setAnchorEl(null);
    }
    if (screenWidth < 500) {
      setIsMobile(true);
    }
  }, [screenWidth])

  useEffect(() => {
    setAllProducts(products);

    if (query.category) {
      setSelectedCategory(query.category);
    } else if (query.collection) {
      setSelectedCategory(query.collection);
    } else {
      setSelectedCategory('');
    }

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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
    },
    selectedProduct: selectedProduct,
    setSelectedProduct: (productId: string) => {
      setSelectedProduct(productId);
    },
    fromProducts: fromProducts,
    setFromProducts: (from: boolean) => {
      setFromProducts(from);
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
    setProductsToShow(sortData(selectedCategory, selectedSort, allProducts));
  }, [selectedSort, selectedCategory])

  return (
    <SettingsContext.Provider value={store}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
