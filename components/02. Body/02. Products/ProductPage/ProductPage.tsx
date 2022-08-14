import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Banner } from '../../../UILibrary';
import Carousel from './Carousel';
import ProductInfo from './ProductInfo';
import { SettingsContext } from '../../../Contexts/SettingsContext';
import { scrollToTop } from '../../../../helper/scrollToTop';
import { useRouter } from 'next/router';
import { products } from '../../../../data/products';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  InnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1320px;
  `,
  CarouselInfoWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
  `,
};

const ProductPage = () => {
  const { setCurrentPage } = useContext(SettingsContext);
  const { query } = useRouter();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    setCurrentPage('view');
    scrollToTop();
  }, [])

  const fetchProduct = (id) => {
    let temp = products.find(product => product.id === id);
    setProduct(temp);
  }

  useEffect(() => {
    if (query.productID) {
      console.log('selected product from query param', query.productID);
      fetchProduct(query.productID);
    }
  }, [query])

  useEffect(() => {
    if (product) console.log(product);
  }, [product])

  return (
    <_.Wrapper>
      {product &&
        <>
          <Banner text={product.title} />
          <_.InnerWrapper>
            <_.CarouselInfoWrapper>
              <Carousel product={product} />
              <ProductInfo product={product} />
            </_.CarouselInfoWrapper>
          </_.InnerWrapper>
        </>
      }
    </_.Wrapper>
  );
};

export default ProductPage;