import React, { useContext } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import { SettingsContext } from '../../Contexts/SettingsContext';

const _ = {
  Wrapper: styled.div`
    max-height: 400px;
    max-width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    cursor: pointer;
    transition: 200ms ease-in;

  `,
  CardImgWrapper: styled.div`
    width: 100%;
    height: 90%;
    overflow: hidden;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  `,
  CardImg: styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s ease-in;
    overflow: hidden;
  `,
  TextWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    /* border: 1px solid red; */
    padding: 5px;
    margin-left: 20px;
    font-family: 'Mali', cursive;
  `,
  Title: styled.span`
    font-size: 22px;
  `,
  Price: styled.span`
    margin-top: 3px;
    color: #545454;
  `
}

const Card = ({ product }) => {
  const { setSelectedProduct, setFromProducts } = useContext(SettingsContext);

  const goToProduct = () => {
    setSelectedProduct(product);
    setFromProducts(true);
    Router.push('/products/view?productID=' + product.id);
  }

  return (
    <_.Wrapper onClick={goToProduct}>
      <_.CardImgWrapper>
        <_.CardImg src={product.images[0]} alt='product-card' />
      </_.CardImgWrapper>
      <_.TextWrapper>
        <_.Title>{product.title}</_.Title>
        <_.Price>{product.category} {product.collection ? `| ${product.collection}` : ""}</_.Price>
        <_.Price>{product.price}</_.Price>
      </_.TextWrapper>
    </_.Wrapper>
  );
};

export default Card;