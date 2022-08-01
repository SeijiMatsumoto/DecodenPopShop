import React from 'react';
import Footer from './03. Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;