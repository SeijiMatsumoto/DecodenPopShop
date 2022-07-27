import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from 'next/link';
import { categories } from '../../../data/categories';
import { IoPhonePortraitOutline, IoShirtOutline } from "react-icons/io5";
import { GiPlasticDuck } from "react-icons/gi";
import { TbMug } from "react-icons/tb";


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
  background-color: #f5f5f5;
  * {
    font-family: 'Roboto Flex', sans-serif;
  }
`;

const InnerWrapper = styled.div`
  width: 95%;
  margin: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 15px;
  margin-right: 25px;
  padding-bottom: 5px;
  border-bottom: 4px solid #fa741a;
  cursor: default;
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
  @media screen and (max-width: 1320px) {
    flex-direction: column;
  }

`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: #FFF5F0;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  width: 100%;
  margin: 10px;
  padding: 50px 20px;
  cursor: pointer;
  transition: 400ms ease;
  background: linear-gradient(to right, #ffeae0 50%, #FFF5F0 50%);
  background-size: 200% 200%;
  background-position: right bottom;

  color: black;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-position: left bottom;

    h4 {
      color: #fa741a;
    }
    span {
      color: #fa741a;
    }
    h5 {
      left: 3px;
    }
  }

  @media screen and (max-width: 1320px) {
    width: 90%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  margin: 0;
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

const Icon = styled.span`
  font-size: 40px;
  margin: 5px 20px 0 5px;
  transition: 500ms ease;
`;

const Categories = () => {
  const icons = [
    <IoPhonePortraitOutline key='cases' />,
    <IoShirtOutline key='clothing' />,
    <GiPlasticDuck key='toys' />,
    <TbMug key='accessories' />
  ]
  return (
    <Wrapper>
      <InnerWrapper>
        <CardsWrapper>
          <TitleWrapper><Title>Featured Categories</Title></TitleWrapper>
          {categories.slice(0, 4).map((category, i) => {
            return (
              <Link key={category + 'component'} href={`/products/${category.toLowerCase()}`} >
                <Card id='card'>
                  <Icon>{icons[i]}</Icon>
                  <TextWrapper>
                    <CardTitle>{category}</CardTitle>
                    <SubWrapper>
                      <SubText>Shop category</SubText>
                      <SubArrow><FaLongArrowAltRight /></SubArrow>
                    </SubWrapper>
                  </TextWrapper>
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