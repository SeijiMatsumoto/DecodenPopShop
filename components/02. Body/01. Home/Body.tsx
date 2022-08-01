import React from 'react';
import DuckFacts from './DuckFacts';
import Categories from './Categories';
import Splash from './Splash';
import Popular from './Popular';
import Details from './Details';
import Navbar from './Navbar/HomeNavbar';

const Body = () => {
  return (
    <div>
      <Navbar />
      <Splash />
      <Categories />
      <Popular />
      <DuckFacts />
      <Details />
    </div>
  );
};

export default Body;