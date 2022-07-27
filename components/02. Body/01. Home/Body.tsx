import React from 'react';
import DuckFacts from './DuckFacts';
import Categories from './Categories';
import Splash from './Splash';
import Popular from './Popular';
import Details from './Details';

const Body = () => {
  return (
    <div>
      <Splash />
      <Categories />
      <Popular />
      <DuckFacts />
      <Details />
    </div>
  );
};

export default Body;