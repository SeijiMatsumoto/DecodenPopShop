import React from 'react';
import DuckFacts from './DuckFacts';
import Categories from './Categories';
import Splash from './Splash';

const Body = () => {
  return (
    <div>
      <Splash />
      <Categories />
      <DuckFacts />
    </div>
  );
};

export default Body;