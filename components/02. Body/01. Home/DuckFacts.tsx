import React, { useEffect, useState } from 'react';
import { duckFacts } from '../../../data/duckFacts';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 30px 0;
  position: relative;
  flex-direction: column;

  * {
    font-family: "Roboto", sans-serif;
  }
`;

const DuckFactsTitle = styled.span`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 2px solid #fa741a;
`;

const InnerWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;

const DuckImg = styled.img`
  height: 200px;
  margin: 30px;
  position: relative;
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
  font-size: 20px;
`;

const FactWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Header = styled.span`
  font-size: 18px;
  margin-bottom: 5px;
  text-align: left;
`;

const Subtext = styled.span`
  text-align: left;
  font-size: 16px;
`;

const Refresh = styled.button`
  margin-top: 10px;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 30px;
  width: 30%;
  color: white;
  background-color: #fa741a;
  border: none;
  cursor: pointer;
  transition: 200ms ease;

  &:hover {
    background-color: #faa165;
    transform: scale(0.99);
  }
`;

const DuckFacts = () => {
  const [randomFact, setFact] = useState({ heading: '', subtext: '' });

  const getRandomFact = () => {
    const rand = Math.floor(Math.random() * duckFacts.length - 1);
    setFact(duckFacts[rand]);
  }

  useEffect(() => {
    getRandomFact();
  }, [])

  return (
    <Wrapper>
      <DuckFactsTitle>Duck Facts</DuckFactsTitle>
      <InnerWrapper>
        <DuckImg src="/duck.png" alt="duck" />
        <Bubble>
          <Title>Did you know?</Title>
          <FactWrapper>
            <Header>{randomFact.heading}!</Header>
            <Subtext>{randomFact.subtext}</Subtext>
          </FactWrapper>
          <Refresh onClick={getRandomFact}>Refresh Fact</Refresh>
        </Bubble>
      </InnerWrapper>
    </Wrapper>
  );
};

export default DuckFacts;