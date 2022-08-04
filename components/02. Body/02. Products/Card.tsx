import React from 'react';
import styled from 'styled-components';

const _ = {
  Wrapper: styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin: 30px;
    overflow: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 450px) {
      width: 95%;
    }

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  `,
  CardImgWrapper: styled.div`
    width: 100%;
    height: 90%;
    overflow: hidden;
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
    align-items: center;
    flex-direction: column;
    margin: 10px;
    height: 10%;
  `,
  Title: styled.span``,
  Price: styled.span``
}

const Card = ({ src, title, price }) => {
  return (
    <_.Wrapper>
      <_.CardImgWrapper>
        <_.CardImg src={src} alt='product-card' />
      </_.CardImgWrapper>
      <_.TextWrapper>
        <_.Title>{title}</_.Title>
        <_.Price>{price}</_.Price>
      </_.TextWrapper>
    </_.Wrapper>
  );
};

export default Card;