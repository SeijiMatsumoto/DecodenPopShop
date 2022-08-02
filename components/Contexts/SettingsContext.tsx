import React, { useState, createContext, useContext, useEffect } from "react";

export const SettingsContext = createContext({
  currentPage: 'home',
  setCurrentPage: (page: string) => { },
});

export const SettingsProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 500) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const store = {
    currentPage: currentPage,
    setCurrentPage: (currentPage: string) => {
      setCurrentPage(currentPage);
    }
  };

  useEffect(() => {
    const home = document.getElementById('nav1');
    const products = document.getElementById('nav2');
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

  }, [currentPage])
  return (
    <SettingsContext.Provider value={store}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  return useContext(SettingsContext);
};
