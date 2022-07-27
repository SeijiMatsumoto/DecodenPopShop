import React from 'react';
import styled from 'styled-components';
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
import { categories } from '../../../data/categories';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
  * {
    font-family: 'Roboto Flex', sans-serif;
  }
`;

const InnerWrapper = styled.div`
  width: 95%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 15px;
  margin-right: 25px;
  padding-bottom: 5px;
  border-bottom: 2px solid #fa741a;
`;

const Title = styled.span`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #FFF5F0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  width: 100%;
  margin: 10px;
  padding: 50px 20px;
  cursor: pointer;
  transition: 500ms ease;

  color: black;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #ffefe8;

    h4 {
      color: #fa741a;
    }
    h5 {
      left: 3px;
    }
  }
`;

const CardTitle = styled.span`
    font-size: 25px;
    font-weight: bold;
`;

const SubWrapper = styled.h4`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`;

const SubText = styled.span`
  font-size: 16px;
  transition: 500ms ease;
`;

const SubArrow = styled.h5`
  position: relative;
  margin: 5px 0 0 5px;
  position: relative;
  transition: 300ms ease;
  left: 0;
`;

const Categories = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <CardsWrapper>
          <TitleWrapper><Title>Popular Categories:</Title></TitleWrapper>
          {categories.slice(0, 4).map(category => {
            return (
              <Link key={category + 'component'} href={`/products/${category.toLowerCase()}`}>
                <Card>
                  <CardTitle>{category}</CardTitle>
                  <SubWrapper>
                    <SubText>Shop category</SubText>
                    <SubArrow><FaLongArrowAltRight /></SubArrow>
                  </SubWrapper>
                </Card>
              </Link>
            )
          })}
        </CardsWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Categories;