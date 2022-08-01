import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { categories } from '../../../../data/categories';

const _ = {
  CatWrapper: styled.div`
    display: none;
    padding: 10px;
    width: 100%;
    background-color: #719abe;
    justify-content: center;

    * {
      font-family: "Roboto", sans-serif;
    }

    @media screen and (max-width: 500px) {
      display: flex;
    }
  `,
  CatInnerWrapper: styled.div`
    padding: 0 40px;
    width: 2560px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    transition: 400ms ease;
    @media screen and (max-width: 2560px) {
      width: 90%;
    }
    @media screen and (max-width: 500px) {
      font-size: 12px;
      width: 95%;
    }
  `,
  CatTitle: styled.span`
    color: white;
    margin-right: 10px;
    cursor: default;
  `,
  CategoriesWrapper: styled.div``,
  CategoriesText: styled.span`
    color: #dedede;
    padding: 10px;
    cursor: pointer;
    transition: 400ms ease;

    &:hover {
      color: white;
    }
    @media screen and (max-width: 500px) {
      padding: 10px 5px;
    }
  `
}

const CategoryBar = () => {
  return (
    <_.CatWrapper id="catNav">
      <_.CatInnerWrapper>
        <_.CatTitle>Shop by category:</_.CatTitle>
        <_.CategoriesWrapper>
          {categories.map(category => (
            <Link key={category} href={`/products/${category.toLowerCase()}`}><_.CategoriesText>{category}</_.CategoriesText></Link>
          ))}
        </_.CategoriesWrapper>
      </_.CatInnerWrapper>
    </_.CatWrapper>
  );
};

export default CategoryBar;