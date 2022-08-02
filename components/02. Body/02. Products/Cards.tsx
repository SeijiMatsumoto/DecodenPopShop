import React from 'react';
import styled from 'styled-components';
import { products } from '../../../data/products';
import Card from './Card';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    padding: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  InnerWrapper: styled.div`
    display: grid;
    @media (min-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 2100px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 450px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `
}

const Cards = () => {
  return (
    <_.Wrapper>
      <_.InnerWrapper>
        {products.cases.map(product => {
          return (
            <Card key={product.src} src={product.src} title={product.title} price={product.price} />
          )
        })}
      </_.InnerWrapper>
    </_.Wrapper>
  );
};

export default Cards;