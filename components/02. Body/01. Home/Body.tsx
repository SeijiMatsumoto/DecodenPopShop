import React, { useEffect, useContext } from 'react';
import DuckFacts from './DuckFacts';
import Categories from './Categories';
import Splash from './Splash';
import Popular from './Popular';
import Details from './Details';
import { SettingsContext } from '../../Contexts/SettingsContext';

const Body = () => {
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('home');
  }, [])

  return (
    <div>
      <Splash />
      <Categories />
      <Popular />
      {/* <DuckFacts /> */}
      <Details />
    </div>
  );
};

export default Body;