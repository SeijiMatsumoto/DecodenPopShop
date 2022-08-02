import React from 'react';
import Navbar from './01. Navbar/Navbar';
import Footer from './03. Footer/Footer';
import { SettingsProvider } from './Contexts/SettingsContext';

const Layout = ({ children }) => {
  return (
    <SettingsProvider>
      <div id="layout">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SettingsProvider>
  );
};

export default Layout;