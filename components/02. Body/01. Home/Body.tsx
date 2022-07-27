import React from 'react';
import DuckFacts from './DuckFacts';
import Categories from './Categories';
import Splash from './Splash';

const Body = () => {
  return (
    <div>
      <Splash />
      <DuckFacts />
      <Categories />
    </div>
  );
};

export default Body;