import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { categories } from '../../data/categories';

const CatWrapper = styled.div`
  display: none;
  padding: 10px;
  width: 100%;
  background-color: #719abe;
  justify-content: center;

  * {
    font-family: "Roboto", sans-serif;
  }
`;

const CatInnerWrapper = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  transition: 400ms ease;
`;

const CatTitle = styled.span`
  color: white;
  margin-right: 10px;
  cursor: default;
`;

const CategoriesWrapper = styled.div`
`;

const CategoriesText = styled.span`
  color: #dedede;
  padding: 10px;
  cursor: pointer;
  transition: 400ms ease;

  &:hover {
    color: white;
  }
`;
const CategoryBar = () => {
  return (
    <CatWrapper id="catNav">
      <CatInnerWrapper>
        <CatTitle>Shop by category:</CatTitle>
        <CategoriesWrapper>
          {categories.map(category => (
            <Link key={category} href={`/products/${category.toLowerCase()}`}><CategoriesText>{category}</CategoriesText></Link>
          ))}
        </CategoriesWrapper>
      </CatInnerWrapper>
    </CatWrapper>
  );
};

export default CategoryBar;