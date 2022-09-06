import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from "next/router";
import styled from 'styled-components';
import { Banner } from '../../UILibrary';
import Cards from './Cards';
import { SettingsContext } from '../../Contexts/SettingsContext';
import { scrollToTop } from '../../../helper/scrollToTop';
import SideBarMenu from './SideBarMenu';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  ContentsWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    @media (min-width: 2560px) {
      width: 2560px;
    }
  `,
}

const Products = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
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
        <Cards isOpen={openMenu} setOpenMenu={setOpenMenu} />
      </_.ContentsWrapper>
      <SideBarMenu isOpen={openMenu} setOpenMenu={setOpenMenu} query={query} />
    </_.Wrapper>
  );
};

export default Products;