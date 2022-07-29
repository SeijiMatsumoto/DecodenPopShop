import React from 'react';
import styled from 'styled-components';
import { FaShippingFast, FaMoneyBillWave } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  * {
    font-family: 'Roboto', sans-serif;
  }
  background-color: #fa741a;
`;

const InnerWrapper = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f1f1f1;
  width: 30%;
  text-align: center;
  padding: 50px;

  & > span {
    cursor: default;
  }

  @media screen and (max-width: 1000px) {
    padding: 0;
  }

  @media screen and (max-width: 500px) {
    width: 90%
  }
`;


const Icon = styled.span`
  font-size: 55px;
  @media screen and (max-width: 500px) {
    font-size: 45px;
  }
`;

const Title = styled.span`
  font-size: 20px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const Subtext = styled.span`
  font-size: 16px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Bar = styled.span`
  height: 100px;
  border-right: 1px solid #e2e2e2;

  @media screen and (max-width: 1000px) {
    border-right: none;
    height: 0;
    margin-bottom: 30px;
  }
`;

const A = styled.a`
  text-decoration: none;
  margin-top: 5px;
  color: #f1f1f1;
  transition: 200ms ease;
  &:hover {
    color: white;
  }
`;
const Details = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Col>
          <Icon><FaShippingFast /></Icon>
          <Title>Free Shipping</Title>
          <Subtext>Free shipping on all orders over $50</Subtext>
        </Col>
        <Bar />
        <Col>
          <Icon><FaMoneyBillWave /></Icon>
          <Title>Help Save Ducks</Title>
          <Subtext>10% of proceeds go to Ducks Unlimited</Subtext>
          <A href="https://www.ducks.org/wetland-conservation?poe=home">Learn more</A>
        </Col>
        <Bar />
        <Col>
          <Icon><BiSupport /></Icon>
          <Title>24/7 Online Support</Title>
          <Subtext>High customer satisfaction</Subtext>
        </Col>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Details;