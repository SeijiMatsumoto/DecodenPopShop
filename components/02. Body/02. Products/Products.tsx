import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Cards from './Cards';
import SortBar from './SortBar';
import Navbar from '../../01. Navbar/Navbar';

const _ = {
  Wrapper: styled.div`
    width: 100%;
    height: 200vh;
  `,
}

const Products = () => {
  return (
    <_.Wrapper>
      <Navbar />
      <Banner />
      <SortBar />
      <Cards />
    </_.Wrapper>
  );
};

export default Products;