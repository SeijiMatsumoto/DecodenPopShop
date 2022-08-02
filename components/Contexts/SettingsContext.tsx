import React, { useState, createContext, useContext, useEffect } from "react";

export const SettingsContext = createContext({
  currentPage: 'home',
  setCurrentPage: (page: string) => { },
});

export const SettingsProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
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
    console.log('Current page:', currentPage);

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
