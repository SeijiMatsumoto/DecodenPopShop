import React from 'react';
import Navbar from './01. Navbar/Navbar';
import Footer from './03. Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;