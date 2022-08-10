import React, { useContext, useEffect } from 'react';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { Banner } from '../../UILibrary';
import Cards from './Cards';
import SideBar from './SideBar';
import { SettingsContext } from '../../Contexts/SettingsContext';
import { scrollToTop } from '../../../helper/scrollToTop';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ContentsWrapper: styled.div`
    width: 1320px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 1400px) {
      width: 95vw;
    }
  `,
}

const Products = () => {
  const { query } = useRouter();
  const { setCurrentPage } = useContext(SettingsContext);

  useEffect(() => {
    setCurrentPage('products');
    scrollToTop();
  }, [])

  let text: any;
  if (query.category) text = query.category;
  else if (query.collection) text = query.collection;
  else if (query.results) text = "Products";
  else text = "All Products";

  return (
    <_.Wrapper>
      <Banner text={text} />
      <_.ContentsWrapper>
        <SideBar query={query} />
        <Cards />
      </_.ContentsWrapper>
    </_.Wrapper>
  );
};

export default Products;