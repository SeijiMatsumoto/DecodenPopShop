import React from 'react';
import DuckFacts from './DuckFacts';
import Categories from './Categories';
import Splash from './Splash';
import Popular from './Popular';

const Body = () => {
  return (
    <div>
      <Splash />
      <Categories />
      <Popular />
      <DuckFacts />
    </div>
  );
};

export default Body;