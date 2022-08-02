import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Cards from './Cards';
import SortBar from './SortBar';
import { SettingsContext } from '../../Contexts/SettingsContext';
const _ = {
  Wrapper: styled.div`
    width: 100%;
    height: 200vh;
  `,
}

const Products = () => {
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('products');
  }, [])

  return (
    <_.Wrapper>
      <Banner />
      <SortBar />
      <Cards />
    </_.Wrapper>
  );
};

export default Products;