import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Banner } from '../../UILibrary';
import Cards from './Cards';
import SortBar from './SortBar';
import { SettingsContext } from '../../Contexts/SettingsContext';
import { scrollToTop } from '../../../helper/scrollToTop';
import DropdownBar from './DropdownBar';

const _ = {
  Wrapper: styled.div`
    width: 100%;
  `,
}

const Products = () => {
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('products');
    scrollToTop();
  }, [])

  return (
    <_.Wrapper>
      <Banner text='All Products' />
      <DropdownBar />
      <SortBar />
      <Cards />
    </_.Wrapper>
  );
};

export default Products;