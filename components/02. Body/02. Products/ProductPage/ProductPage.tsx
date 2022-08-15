import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Banner } from '../../../UILibrary';
import Carousel from './Carousel';
import ProductInfo from './ProductInfo';
import { SettingsContext } from '../../../Contexts/SettingsContext';
import { scrollToTop } from '../../../../helper/scrollToTop';
import { useRouter } from 'next/router';
import { products } from '../../../../data/products';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Router from 'next/router';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  BackWrapper: styled.div`
    width: 1320px;
    margin-top: 20px;
  `,
  BackBtn: styled.button`
    font-size: 14px;
    border: none;
    border-radius: 20px;
    padding: 4px 10px 4px 2px;
    background-color: #dcdcdc;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      height: 15px;
      transition: all 200ms;
    }

    &:hover {
      svg {
        position: relative;
        left: -1px;
      }
    }
    &:active {
      transform: translateY(1px);
    }
  `,
  BackText: styled.span``,
  CarouselInfoWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 1320px;
    position: relative;
  `,
};

const ProductPage = () => {
  const { setCurrentPage, fromProducts } = useContext(SettingsContext);
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
      fetchProduct(query.productID);
    }
  }, [query])

  const goBack = () => {
    fromProducts ? history.back() : Router.push('/products/all');
  }

  return (
    <_.Wrapper>
      {product &&
        <>
          <Banner text={product.title} />
          <_.BackWrapper>
            <_.BackBtn onClick={goBack}>
              <ArrowBackIcon />
              <_.BackText>Back</_.BackText>
            </_.BackBtn>
          </_.BackWrapper>
          <_.CarouselInfoWrapper>
            <Carousel product={product} />
            <ProductInfo product={product} />
          </_.CarouselInfoWrapper>
        </>
      }
    </_.Wrapper>
  );
};

export default ProductPage;