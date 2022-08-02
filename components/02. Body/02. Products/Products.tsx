import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Cards from './Cards';
import SortBar from './SortBar';

const _ = {
  Wrapper: styled.div`
    position: relative;
    top: 120px;
    width: 100%;
    height: 200vh;
  `,
}

const Products = () => {
  return (
    <_.Wrapper>
      <Banner />
      <SortBar />
      <Cards />
    </_.Wrapper>
  );
};

export default Products;