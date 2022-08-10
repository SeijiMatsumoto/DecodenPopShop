import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { SettingsContext } from '../../Contexts/SettingsContext';

const _ = {
  Wrapper: styled.div`
    padding: 30px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    @media (max-width: 1250px) {
      width: 70%;
    }
    @media (max-width: 850px) {
      width: 55%;
    }
    @media (max-width: 550px) {
      width: 95vw;
    }
  `,
  InnerWrapper: styled.div`
    display: grid;
    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1250px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 450px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `,
  NoProductsWrapper: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60vh;
    text-align: center;

    @media screen and (max-width: 1200px) {
      width: 90%;
    }
  `,
  NoProductsText: styled.span`
    padding: 20px 20%;
    font-size: 36px;
    font-family: 'Mali', cursive;
    @media screen and (max-width: 1200px) {
      font-size: 25px;
      padding: 20px;
    }
  `,
  ContactButton: styled.button``,
}

const Cards = () => {
  const { productsToShow, selectedCategory } = useContext(SettingsContext);

  return (
    <_.Wrapper>
      {productsToShow.length ?
        <_.InnerWrapper>
          {productsToShow.map((product: any) => {
            return (
              <Card key={product.images[0]} src={product.images[0]} title={product.title} price={product.price} />
            )
          })}
        </_.InnerWrapper>
        :
        <_.NoProductsWrapper>
          <_.NoProductsText>There are no {selectedCategory.indexOf(" ") > -1 ? selectedCategory : selectedCategory + ' products '} currently available. Sorry! :( </_.NoProductsText>
          <_.ContactButton>Contact us?</_.ContactButton>
        </_.NoProductsWrapper>
      }
    </_.Wrapper>
  );
};

export default Cards;