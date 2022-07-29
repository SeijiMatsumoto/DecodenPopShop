import React, { useEffect, useState } from 'react';
import { duckFacts } from '../../../data/duckFacts';
import styled from 'styled-components';
import { SectionTitle } from '../../UILibrary';
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 100px 0;
  position: relative;
  flex-direction: column;

  * {
    font-family: "Roboto", sans-serif;
  }

  @media screen and (max-width: 500px) {
    padding: 30px 0 40px;
  }
`;

const InnerWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 20px;

  @media screen and (max-width: 1320px) {
    width: 90%;
  }
`;

const DuckImg = styled.img`
  height: 200px;
  transform: scale(1.5);
  margin: 30px;
  position: relative;
  top: -20px;
  @media screen and (max-width: 1320px) {
    height: 100px;
  }
`;

const Bubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: sans-serif;
  font-size: 18px;
  line-height: 24px;
  width: 500px;
  background: #fff;
  border-radius: 40px;
  padding: 24px;
  text-align: center;
  color: #000;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 20px 10px 0;
    border-color: transparent #ffffff transparent transparent;
    left: -20px;
    top: 50px;
  }
`;

const Title = styled.span`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 22px;
`;

const FactWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Header = styled.span`
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
`;

const Subtext = styled.span`
  text-align: left;
  font-size: 18px;
`;

const Refresh = styled.button`
  margin-top: 20px;
  font-size: 12px;
  padding: 10px;
  border-radius: 30px;
  width: 30%;
  color: white;
  background-color: #fa741a;
  border: none;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: #ff8432;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 1320px) {
    width: 70%;
  }
`;

const DuckFacts = () => {
  const [randomFact, setFact] = useState({ heading: '', subtext: '' });

  const getRandomFact = () => {
    const rand = Math.floor(Math.random() * duckFacts.length);
    setFact(duckFacts[rand]);
  }

  useEffect(() => {
    getRandomFact();
  }, [])

  return (
    <Wrapper >
      <SectionTitle text="Duck Facts" />
      <InnerWrapper>
        <DuckImg src="/duck.jpeg" alt="duck" />
        <Bubble>
          <Title>Did you know?</Title>
          {randomFact && <FactWrapper>
            <Header>{randomFact.heading}!</Header>
            <Subtext>{randomFact.subtext}</Subtext>
          </FactWrapper>
          }
          <Refresh onClick={getRandomFact}>New Fact</Refresh>
        </Bubble>
      </InnerWrapper>
    </Wrapper>
  );
};

export default DuckFacts;