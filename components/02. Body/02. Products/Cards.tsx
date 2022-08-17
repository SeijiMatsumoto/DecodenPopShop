import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { SettingsContext } from '../../Contexts/SettingsContext';
import Link from 'next/link';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
const _ = {
  Wrapper: styled.div`
    padding: 30px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    @media (max-width: 1250px) {
      width: 70%;
    }
    @media (max-width: 850px) {
      width: 55%;
    }
    @media (max-width: 550px) {
      width: 95vw;
      padding-top: 0;
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
  FilterBtnWrapper: styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
  `,
  FilterBtn: styled.button`
    display: none;
    padding: 10px 10px;
    font-family: 'Mali', cursive;
    border: none;
    background-color: #f0f0f0;
    font-size: 20px;
    width: 100vw;

    @media (max-width: 550px) {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    }

    &:active {
      box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
    }
  `,
  FilterText: styled.span`
    position: relative;
    margin-right: 5px;
    top: 1px;
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

const Cards = ({ isOpen, setOpenMenu }) => {
  const { productsToShow, selectedCategory } = useContext(SettingsContext);

  return (
    <_.Wrapper>
      <_.FilterBtnWrapper>
        <_.FilterBtn onClick={() => setOpenMenu(!isOpen)}>
          <FilterAltIcon />
          <_.FilterText>Filter</_.FilterText>
        </_.FilterBtn>
      </_.FilterBtnWrapper>
      {productsToShow.length ?
        <_.InnerWrapper>
          {productsToShow.map((product: any) => {
            return (
              <Card key={product.images[0]} product={product} />
            )
          })}
        </_.InnerWrapper>
        :
        <_.NoProductsWrapper>
          <_.NoProductsText>There are no {selectedCategory.indexOf(" ") > -1 ? selectedCategory : selectedCategory + ' products '} currently available. Sorry! :( </_.NoProductsText>
          <Link href="/contact"><_.ContactButton>Contact us?</_.ContactButton></Link>
        </_.NoProductsWrapper>
      }
    </_.Wrapper>
  );
};

export default Cards;