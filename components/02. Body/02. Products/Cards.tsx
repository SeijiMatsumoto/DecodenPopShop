import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { SettingsContext } from '../../Contexts/SettingsContext';
import Link from 'next/link';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterBar from './FilterBar';
import { Button } from '../../UILibrary';
import Router from 'next/router';

const _ = {
  Wrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  `,
  InnerWrapper: styled.div`
    display: grid;
    width: 1600px;
    margin: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    @media (max-width: 1650px) {
      width: 95vw;
    }

    @media (max-width: 1450px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 500px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  `,
  FilterBtnWrapper: styled.div`
    width: 100vw;
    display: none;
    justify-content: center;

    @media (max-width: 500px) {
      display: flex;
    }
  `,
  FilterBtn: styled.button`
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 10px 10px;
    font-family: 'Mali', cursive;
    border: none;
    background-color: #fdffec;
    font-size: 20px;
    width: 100vw;
    cursor: pointer;
    transition: all 200ms;
    &:hover {
      background-color: #f5f8dc;
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

  console.log(selectedCategory);
  return (
    <_.Wrapper>
      <_.FilterBtnWrapper>
        <_.FilterBtn onClick={() => setOpenMenu(!isOpen)}>
          <FilterAltIcon />
          <_.FilterText>Filter</_.FilterText>
        </_.FilterBtn>
      </_.FilterBtnWrapper>
      <FilterBar />
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
          <Button action={() => Router.push("/contact")} buttonText="Contact us" />

        </_.NoProductsWrapper>
      }
    </_.Wrapper>
  );
};

export default Cards;