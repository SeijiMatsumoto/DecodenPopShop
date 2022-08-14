import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Quantity from './Quantity';

const _ = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
  `,
  TitleWrapper: styled.div`
    padding-bottom: 10px;
    border-bottom: 4px solid #b8d4d7;
    margin-bottom: 20px;
    width: 150px;
  `,
  Title: styled.span`
    font-size: 46px;
  `,
  CatColWrapper: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
  `,
  Category: styled.span`
    font-size: 18px;
    color: #494949;
  `,
  Divider: styled.span`
    height: 100%;
    border-right: 3px solid #7c75c1;
    margin: 0 5px;
  `,
  Collection: styled.span`
    font-size: 18px;
    color: #7c75c1;
  `,
  Price: styled.span`
    font-size: 20px;
  `,
  Description: styled.div`
    font-size: 20px;
    color: #494949;
    margin: 10px 0;
  `,
  QuantCartWrapper: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 20px 0;
  `,
  CartButton: styled.button`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  `,
}

const ProductInfo = ({ product }) => {
  return (
    <_.Wrapper>
      <_.TitleWrapper>
        <_.Title>{product.title}</_.Title>
      </_.TitleWrapper>
      <_.Price>{product.price} USD</_.Price>
      <_.CatColWrapper>
        <_.Category>{product.category.indexOf(' ') >= 0 ? product.category.slice(0, product.category.length - 1) : product.category}</_.Category>
        <_.Divider />
        <_.Collection>{product.collection}</_.Collection>
      </_.CatColWrapper>
      <_.Description>{product.description}</_.Description>
      <_.QuantCartWrapper>
        <Quantity />
        <_.CartButton>
          Add to cart
        </_.CartButton>
      </_.QuantCartWrapper>
    </_.Wrapper>
  );
};

export default ProductInfo;